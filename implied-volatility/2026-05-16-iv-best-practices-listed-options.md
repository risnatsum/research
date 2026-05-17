# Implied Volatility from Listed Options — Market Best Practices

*Research date: 2026-05-16*
*Audience: finance user, non-engineer. Technical terms defined on first use.*

---

## Executive synthesis

There is a single thread that ties every best practice in this report together: **price options off the forward, not the spot.** Every robust IV methodology — CBOE's VIX, OptionMetrics IvyDB, every sell-side equity derivatives desk — first extracts the market-implied forward price `F` from listed quotes using put-call parity, then inverts vol against that forward. The reason matters: the forward absorbs the three things you would otherwise have to forecast separately (risk-free rate, dividends, borrow cost), and it does so using the market's own view rather than yours. The moment you substitute a vendor's dividend forecast or a textbook risk-free rate, you push your error into the IV surface and it shows up as fake skew.

The second thread is **arbitrage discipline**. A volatility surface is not just a fit to data — it is a probability distribution of where the underlying might end up. Two things must hold or the distribution goes negative somewhere: butterflies must be non-negative (Durrleman's condition) and total variance `w = σ²·T` must be non-decreasing in maturity at every fixed log-moneyness. Naive interpolation in raw IV almost always breaks one or both. The sell-side answer is parametric surfaces — **SSVI** for equity indices, **arbitrage-free SABR** for rates — that enforce these conditions by construction. Roger Lee's 2004 moment formula puts a hard ceiling on how fast IV can grow in the wings; any extrapolation that breaches it implies the underlying has no finite mean.

The third thread, and the one most often skipped by retail and even institutional analytics, is **data hygiene before inversion**. Every authoritative methodology imposes the same family of filters: mid-quote not last-trade, drop zero bids, drop crossed/locked markets, restrict to OTM contracts, restrict to a sensible delta band (roughly 0.05 to 0.95), drop the front week of expiry, and — most underrated — **synchronise the underlying spot and the option quote to the same second**. Muravyev & Pearson (2020) showed quote staleness alone biases effective option spreads by roughly 3x; the same staleness biases any IV computed from naively-snapshotted quotes. CBOE's "two consecutive zero bids and stop" rule and OptionMetrics' intrinsic-value check are not academic niceties — they are the difference between a clean surface and one that looks fine until you try to hedge with it.

The non-obvious insight: the **dividend curve is itself a tradeable asset**, not a model input. Banks warehouse it, hedge it, and quote two-way prices on it; Eurex lists dividend futures on EURO STOXX 50 and 80+ single names; OptionMetrics now sells an "implied dividend" product specifically because vendor consensus forecasts are systematically biased relative to what the option market actually pays for. If you treat dividends as a number you plug in, you are competing with desks that treat them as a position they manage. This is why Buehler's 2010 forward-based framework — express vol against `F`, not `S`, so the surface is *invariant* to how the next dividend is treated — became the single-name equity derivatives industry standard.

Practical takeaway for your IV pipeline: extract `F` per expiry from the strike where `|C − P|` is smallest; bootstrap implied dividends and borrow from the term structure of `F`; filter quotes hard before inverting; fit a parametric arbitrage-free surface (SSVI for indices, SABR or local-SVI for short-dated); and test Durrleman + calendar monotonicity on the output before trusting it.

---

## Crash course — the fundamentals

*Skip this if you're already comfortable with options notation. It's here as a refresher before the heavier sections.*

### The letters and what they mean

Options research uses a standard set of symbols. Every formula in this document uses some subset of these:

| Symbol | What it represents | Plain English |
|---|---|---|
| `S` | Spot price | The stock's current market price right now |
| `K` | Strike price | The price you locked in when you bought the option |
| `F` | Forward price | What the market says the stock is worth at expiry, accounting for dividends and financing (see §1.1) |
| `T` | Time to expiry | How long until the option expires, expressed in years (e.g. 90 days = 0.25) |
| `r` | Risk-free rate | The interest rate you'd earn holding cash instead (typically short-dated US Treasuries) |
| `q` | Dividend yield | The continuous equivalent of the dividends the stock pays between now and expiry |
| `σ` | Sigma — volatility | How much the stock's price moves, annualised. This is what IV *is* |
| `C` | Call price | Market price of a call option (right to buy at K) |
| `P` | Put price | Market price of a put option (right to sell at K) |
| `b` | Borrow rate | What it costs to short the stock; only matters for hard-to-borrow names |

The model everyone uses — Black-Scholes-Merton (BSM) — takes `S, K, T, r, q` as inputs and spits out a theoretical option price. The only input that isn't directly observable is `σ`. That's the crux of implied volatility.

---

### What "market-implied" means

Normally you run a pricing model *forward*: plug in all the inputs, get a price out. "Implied" means running it *backward*: you already know the price (the option is trading on an exchange), so you ask — *what value of σ would make the model reproduce that price?*

That answer is **implied volatility (IV)**. It's not a forecast. It's the market's collective view of uncertainty baked into the price someone was willing to trade at. If IV is 30%, the option market is effectively saying: "given current prices, the stock is expected to move roughly ±30% a year."

The reason this matters: two stocks can trade at the same dollar price but have completely different IVs — one is boring and stable, the other is wild. IV lets you compare options on equal footing.

---

### A worked example — AAPL with three kinds of options

Say Apple (AAPL) is trading at **$200** today. You're looking at options expiring in 90 days (T = 0.25 years). Three strikes, three situations:

**Setup:**
- Stock price S = $200
- Expiry: 90 days out
- Assume for simplicity: r = 5%, q = 0.5% annual dividend yield, no borrow cost

**Strike $180 — deep in-the-money (ITM) call**

A call at K = $180 lets you buy AAPL at $180 when it's already worth $200. You're already $20 ahead — that's the *intrinsic value*. The option has a high delta (moves nearly dollar-for-dollar with the stock). Because it's so deep ITM, there's little uncertainty about whether it finishes in the money; most of the option's value is intrinsic. IV quoted here is less reliable — vega (sensitivity to vol) is low, so a tiny price error produces a big IV error. Most pipelines drop these.

**Strike $200 — at-the-money (ATM)**

A call at K = $200 is right where the stock is trading. Coin-flip territory — nobody knows if AAPL will be above or below $200 at expiry. This option has the *highest vega* of any strike, meaning its price is most sensitive to changes in volatility. This is why ATM options are the cleanest signal for IV — the market is quoting them tightest, and any vol error in the price shows up loudly. When researchers extract the "market's view on volatility," they're mostly reading ATM options.

**Strike $230 — out-of-the-money (OTM) call**

A call at K = $230 pays off only if AAPL rallies 15% in 90 days. Low probability, so it's cheap — maybe a few dollars. Low vega too. What's interesting here is *relative* IV: if the $230 call implies a higher σ than the $200 call, that's called the **volatility skew** (or smile). It means the market prices tail events — big moves — at a premium relative to the base BSM model. Skew is real and important; much of Topics 2 and 3 in this document is about fitting a surface that captures skew without creating arbitrage.

**The surface view:** take every listed strike ($180, $185, $190 … $230, $240 …) at every expiry (30 days, 60 days, 90 days, 180 days …), invert each option price to get its IV, and plot them. What you get is the **volatility surface** — a grid of IVs by strike and maturity. The rest of this document is about how to build that surface cleanly.

---

## Topic scorecard

| Topic | Importance | Researchability | Research Quality | Notes |
|---|---|---|---|---|
| 1. Forward extraction + put-call parity + implied div/borrow | 5 | 4 | 4 | CBOE PDF binary — formula re-quoted from search summary, not directly fetched |
| 2. Dividend modelling (discrete / escrowed / Buehler) | 5 | 5 | 4 | Buehler 2010 + Eurex + IvyDB all verified; CME US dividend futures unverified |
| 3. Surface interpolation/extrapolation (SVI, SABR, Lee bound) | 4 | 4 | 4 | OVME and IvyDB internal parameterisations not publicly documented |
| 4. Data quality guard rails (CBOE / IvyDB / academic filters) | 5 | 5 | 5 | Strongest topic — multiple primary sources directly verified |

---

## Key signals

1. **Forward extraction at the ATM-forward strike is the single most important step.** CBOE's VIX methodology picks the strike where `|C − P|` is smallest, then inverts put-call parity at that strike to recover `F`. This works because vega is highest near ATM (quotes are tightest) and any multiplicative vol mis-mark cancels between the call and put legs (CBOE 2024).

2. **Implied dividends beat consensus dividend forecasts — and the gap is tradeable.** OptionMetrics now markets a dedicated implied-dividend product on the explicit grounds that consensus forecasts "can be prone to systematic bias" (OptionMetrics 2024). Eurex lists liquid single-name dividend futures on 80+ European names (Eurex factsheet). If you use IBES or Bloomberg BDVD for dividends in your IV inversion, you are imposing a biased view that shows up as fake skew.

3. **The forward-based ("Buehler") framework eliminates the ex-div kink in the IV surface.** Escrowed-spot models attach volatility to a contaminated state variable, so IV jumps discontinuously the day a dividend rolls off the PV stack. Buehler (2010) showed defining vol on the dividend-stripped forward process removes this artefact entirely. This is now standard on single-name equity derivatives desks.

4. **Parametric arbitrage-free surfaces are not optional.** Gatheral & Jacquier's SSVI (2014) gives a closed-form surface that is provably free of butterfly and calendar arbitrage under explicit parameter conditions. Linear interpolation in raw IV does not — it routinely produces negative implied densities. Hagan's original 2002 SABR formula has the same problem at low strikes; "arbitrage-free SABR" (Hagan 2014) and Antonov's approximations are the rates-desk fixes.

5. **Quote staleness is the silent killer.** Muravyev & Pearson (2020, *RFS*) showed option quotes lag underlying moves by ~30 seconds on average for liquid names, and conventional effective spreads overstate true costs by ~3x. If your IV pipeline does not timestamp-synchronise spot and option mid to the same second (or better, the same NBBO snapshot), your IVs are systematically wrong — and the error is invisible until you compare against a desk that does synchronise.

6. **Filter hierarchy that actually matters** (composite of CBOE, IvyDB, Goyal-Saretto): mid-quote only → bid > 0 → drop crossed/locked → drop two consecutive zero bids walking out from ATM → OTM only → delta in [0.05, 0.95] → drop T < 7 days → relative spread `(ask−bid)/mid` < 50% → no-arbitrage check (mid ≥ intrinsic). Volume and OI are *not* primary filters in either CBOE or IvyDB — they are exposed as fields for the user to apply.

---

## Topic 1 — Forward Price Extraction via Put-Call Parity, Implied Dividends and Borrow Costs

### 1.1 Why dealers price off the forward F, not spot S

A listed equity option's payoff at expiry depends on the **forward price F** — the no-arbitrage price today for delivery of the share at expiry T — not on today's spot S. F bundles every cash flow between now and expiry: financing cost (risk-free rate `r`), expected dividends (`q`), and the **borrow/repo cost** (`b`) a short-seller pays to borrow the stock. For European options on a forward, put-call parity collapses to **C − P = e^(−rT)(F − K)** (Hull 2022, ch.11). Pricing off F means the model never takes a view on r, q, and b separately — all three are absorbed into one observable number, which is how a market maker hedges in practice.

### 1.2 Recovering F from listed quotes — the ATM-forward strike trick

Rearranging parity gives **F = K + e^(rT)(C − P)**. Any strike works in principle, but each (C, P) pair contains bid-ask noise and stale prints. The CBOE VIX methodology picks the strike **K\*** where **|C − P|** is smallest — the "ATM forward strike" — and applies parity there (CBOE 2024, Forward Index Level section). Two reasons this strike is the cleanest signal:

- **Vega is highest near ATM**, so quotes are tightest and most liquid; bid-ask noise in C−P is smallest relative to the forward signal.
- **C−P is itself smallest near F**, so any multiplicative vol mis-marking cancels between the two legs.

CBOE then sets K0 as the listed strike at or immediately below F and builds the variance integral from there.

### 1.3 From F to implied q and implied borrow b

Once F is known for each expiry, the **term structure** F(T) can be inverted via **F = S·e^((r − q − b)T)** to back out the **implied dividend yield q** (or a strip of implied discrete cash dividends) and the **implied borrow/repo rate b**. r comes from a separately bootstrapped zero curve — OptionMetrics bootstraps the IvyDB zero curve from BBA LIBOR/OIS deposits and swap rates, then computes F per expiry from listed option mid-prices (OptionMetrics IvyDB Reference Manual).

Because the resulting **dividend curve** is itself a tradeable view — banks warehouse it, hedge it, and quote two-way prices on it — desks refer to calibrated curves as **"dividend deals"** or trade them as dividend swaps / dividend futures (Buehler 2010, sec.2). Buehler shows the stock decomposes as `S_t = (F*_t − D_t)·X_t + D_t`, formalising why the dividend strip is a separable asset.

### 1.4 Why vendor-declared dividends bias the IV surface

Plugging a **vendor forecast** (IBES, Bloomberg BDVD consensus) into the model imposes your forecast on the market rather than reading the market's. Option-implied dividends embed a risk premium and the marginal hedger's view; for single names near an ex-div date they can diverge from analyst consensus by tens of basis points (van Binsbergen, Brandt & Koijen 2012). The wrong q shifts the model forward, tilting call IVs up and put IVs down (or vice versa), producing **skew that is an artefact of the dividend error, not of true vol**. OptionMetrics explicitly markets its implied-dividend product on this point, noting that consensus forecasts "can be prone to systematic bias" (OptionMetrics 2024).

### 1.5 Practical pitfalls

- **American-exercise premium on puts.** US single-stock options are American. Around a discrete dividend, deep ITM calls can be optimally exercised just before the ex-date and deep ITM puts just after — parity becomes an inequality. Naive inversion overstates the implied dividend. OptionMetrics uses binomial-tree de-Americanisation for this reason (OptionMetrics 2024).
- **Hard-to-borrow names.** When b is large (recent IPOs, biotech with high short interest), the borrow fee dominates `r − q` and the put leg looks "too expensive" to anyone using parity with b=0. The residual is the **option-implied borrow rate**, which often beats stock-loan desks' own marks (Bloomberg Professional 2023; Nasdaq 2019).
- **Short-dated options.** For T < 1 week, `r·T` and `q·T` are tiny, so the parity residual is dwarfed by tick size and bid-ask. Forward extraction is unreliable; desks either skip the front expiry or smooth across maturities. `[UNVERIFIED — practitioner heuristic, not documented in cited sources.]`

---

## Topic 2 — Dividend Modelling for IV Calculation

When you invert an option price to get IV, you need a forward price for the underlying. For a dividend-paying stock that means a view on dividends between now and expiry. The three industry approaches differ in how they push that view into the pricing engine — and the choice visibly shapes the IV surface.

### 2.1 The three treatments

**(a) Continuous dividend yield `q` (Merton 1973).** Treats dividends as a constant proportional yield, so the forward becomes `F = S·exp((r-q)T)` (Merton 1973). Clean and fine for broad indices where many small payments smooth into something yield-like (S&P 500, FTSE 100). For single names with three or four lumpy cash payments a year, it is a structural misfit — the model assumes the stock leaks value continuously when in reality it drops on discrete ex-div dates.

**(b) Escrowed dividend model (Hull; Roll-Geske-Whaley).** Subtract the present value of known cash dividends from spot, then plug the "escrowed" spot `S* = S − PV(D)` into BSM with volatility applied to `S*` (Hull 2022, ch.15–18). Roll (1977), Geske (1979), Whaley (1981) gave a closed-form American-call extension on this basis. Preserves no-arbitrage for European options but treats the post-dividend stub as the volatile asset, with consequences (see §2.2).

**(c) Forward-based / Buehler hybrid.** The single-name equity derivatives industry standard. You model the forward `F(t)` directly — calibrated from put-call parity and the dividend curve — and define volatility on a *clean process* `X(t)` (a martingale with `X(0)=1`) where `S(t) = (F(t) − D(t))·X(t) + D(t)` and `D(t)` is the PV-of-future-dividends floor (Buehler 2010). The surface is then expressed against the forward, not spot, so it is invariant to whether the next dividend is treated as cash, yield, or proportional.

### 2.2 The escrowed "kink" and why Buehler fixes it

Under the escrowed model, variance applies to `S − PV(D)`, so the *percentage* volatility implied from market prices jumps mechanically the day a dividend rolls off the PV stack (crosses the ex-date). Plotted across maturities or across an ex-div boundary the IV surface develops a visible discontinuity — a "kink" — even though nothing economically has changed. Buehler shows this is an artefact of attaching volatility to a contaminated state variable, and that defining vol on the dividend-stripped forward process removes the kink and restores a clean Dupire-style local-vol formula consistent with cash dividends and credit risk (Buehler 2010, §3–4).

### 2.3 Forecast vs implied dividends

Near-term dividends (≤12 months) are usually taken from announced/declared amounts. Beyond that, desks calibrate to traded **dividend futures** and OTC **dividend swaps**. Eurex is the deepest venue: index dividend futures on EURO STOXX 50 and single-stock dividend futures on 80+ European names, annual Dec-Dec accrual, cash-settled at the realised dividend (Eurex Dividend Derivatives factsheet). CME lists S&P 500 Annual Dividend Index futures as the US analogue `[UNVERIFIED]`. The strip of these contracts gives a market-implied dividend curve; OptionMetrics' "Implied Dividend" product backs dividends out of option prices via put-call parity for US single names up to two years out.

### 2.4 American-exercise complication

US listed single-name equity options (OCC-cleared) are American. For an ITM call, early exercise just before ex-div can be optimal because you capture the dividend you would otherwise lose to the spot drop. Two standard approaches: **CRR binomial tree** with dividend nodes (accurate but step-hungry); and **Bjerksund-Stensland 2002** closed-form, which splits time to maturity into two regions with flat early-exercise boundaries and gives a fast, accurate lower bound (Bjerksund & Stensland 2002). **OptionMetrics IvyDB US** uses a CRR-family binomial with proprietary convergence acceleration; announced dividends are used as discrete cash, projected dividends fill the gap to expiry (IvyDB US Reference Manual). The commonly-cited 100-step figure for IvyDB is `[UNVERIFIED]` — the manual references "large number of subperiods" and proprietary acceleration without naming a fixed step count.

### 2.5 What breaks if you get it wrong

- **Ignore dividends entirely**: forward is overstated, call IVs biased low and put IVs biased high — a spurious positive skew on a name with material yield.
- **Flat `q` on a single name with a big special dividend**: the model spreads a lump across the year, so options bracketing the actual ex-date misprice in opposite directions, generating a fake term-structure twist and skew distortion around that maturity.
- **Escrowed without surface correction**: visible kink across the ex-div boundary, problematic for vega hedging and local-vol calibration.

---

## Topic 3 — IV Surface Interpolation, Extrapolation and No-Arbitrage Constraints

### 3.1 Why naive interpolation breaks

A listed option market gives you a sparse grid of IVs — a handful of strikes at a handful of maturities. You need a continuous surface to price anything off-grid (exotics, structured products, risk scenarios). Linear interpolation of raw IVs across strikes almost always creates **static arbitrage**:

- **Butterfly arbitrage**: a butterfly spread (long one call at K−ΔK, short two at K, long one at K+ΔK) has a price proportional to the *risk-neutral density* of the underlying at K. If the interpolated call-price function is not convex in strike, that density goes negative — a free lunch. The surface implies "negative probability" somewhere (Roper 2010).
- **Calendar arbitrage**: a longer-dated option must be worth at least as much as a shorter-dated one at the same forward-moneyness. The clean condition is that **total variance** `w(k, T) = σ²(k, T)·T` is non-decreasing in T at fixed forward-log-moneyness `k = log(K/F(T))` (Gatheral & Jacquier 2014).

### 3.2 SVI / SSVI — the equity-index workhorse

Gatheral's **SVI (Stochastic Volatility Inspired)** parameterisation fits a single-maturity smile with five parameters that give a hyperbolic shape in log-moneyness; it matches the Heston large-time asymptotic and fits SPX-style smiles tightly. The original SVI did not guarantee no-arbitrage *across* maturities.

**SSVI (Surface SVI)** and its extension **eSSVI** tie the per-slice parameters to a single ATM total-variance curve θ(T) and a function φ(θ), producing a **closed-form surface provably free of both butterfly and calendar arbitrage** under explicit parameter conditions (Gatheral & Jacquier 2014, *Quantitative Finance* 14(1):59–71). It is the de facto standard for equity index vol surfaces on sell-side desks: fast to calibrate, smooth, and you prove arbitrage-freeness at calibration rather than testing after. Martini & Mingone (2020) sharpened the butterfly conditions via Durrleman's inequality.

### 3.3 SABR — rates and short-dated equity

**SABR** (Hagan, Kumar, Lesniewski, Woodward 2002) is a stochastic-vol model with four parameters (α, β, ρ, ν) and a closed-form asymptotic for Black/Bachelier IV. It is the market standard for **interest-rate caps and swaptions** and is widely used for short-dated equity smiles where its dynamics (correlated forward/vol) are realistic.

Weakness: the original Hagan asymptotic is an expansion, not exact. At **low strikes, long expiries, or high vol-of-vol** it implies a **negative risk-neutral density** — butterfly arbitrage in the wings. This became acute after 2008 when negative rates and near-zero strikes mattered. Fixes: Hagan's PDE-based "arbitrage-free SABR" (2014) and **Antonov et al.'s free-boundary / mapping SABR** approximations, now standard in rates vol systems.

### 3.4 Calendar interpolation in total variance

Standard practice: interpolate **linearly in `w(T) = σ²(T)·T` at fixed forward-log-moneyness k**, not in vol σ itself. Linear-in-w preserves monotonicity of w in T by construction — i.e. no calendar arbitrage — as long as the input slices satisfy `w(T₂) ≥ w(T₁)`. Interpolating in σ does *not* preserve this and routinely creates calendar arbitrage between liquid expiries (Gatheral 2006; Gatheral & Jacquier 2014).

### 3.5 Wing extrapolation and Lee's bound

Outside the quoted strike range, desks extrapolate IV flat or with a controlled linear slope in k. The hard ceiling is **Lee's moment formula** (Lee 2004, *Mathematical Finance* 14(3):469–480): the tail slope of `σ²(k)·T` as `|k|→∞` is bounded above by 2 and below by 0, with the exact slope tied to the number of finite moments of the underlying. Concretely: **IV cannot grow faster than `√(2|k|/T)`**. Any extrapolation that grows faster implies the underlying has no finite first moment — arbitrage. Splines or polynomials extrapolated naively often violate this; SVI/SSVI satisfies it by construction because its wings are linear in k with slope < 2.

### 3.6 The two tests every surface must pass

1. **Durrleman's condition** (butterfly / positive density): a pointwise inequality on w(k, T) and its first two k-derivatives, equivalent to the call-price function being convex in K. If it fails anywhere, the implied density is negative there (Roper 2010; Martini & Mingone 2020).
2. **Calendar monotonicity**: `∂w/∂T ≥ 0` at every fixed k.

Practitioner systems (Bloomberg OVME, OptionMetrics IvyDB) run both tests on the fitted surface and either reject the fit or apply a smoothing/repair step. The exact parametric family OVME and IvyDB use internally is `[UNVERIFIED]` — OptionMetrics describes a kernel-smoothed surface in IvyDB methodology rather than SVI; OVME documentation is behind the terminal. **Sticky-strike vs sticky-delta** (Derman, "Regimes of Volatility", *Risk* 1999) governs how the surface re-quotes when spot moves and matters for hedging, but is orthogonal to the static no-arbitrage problem.

---

## Topic 4 — Data Quality Guard Rails

IV is the value of σ that, plugged into the pricing model, reproduces the option's market price. The inversion is numerically delicate: noisy or illiquid quotes produce IVs that look real but are garbage. Every serious methodology imposes filters before inverting.

### 4.1 CBOE VIX rules (2022 methodology)

The Cboe VIX White Paper sets out the canonical rules.

- **Mid-quote, not last trade.** "Spot VIX Index values are calculated using mid-quote options prices" (p. 6, sec. 3.2).
- **Non-zero bid required.** "Only options that have a non-zero bid price are included" (p. 6, sec. 3.2).
- **Two-consecutive-zero-bid stop rule.** Walking out from the ATM strike: "once two puts with consecutive strike prices are found to have zero bid prices, exclude the observed put(s) and consider no puts with lower strikes for inclusion" (worked example), and the symmetric rule for calls.
- **Only OTM options.** Puts below the forward, calls above; both at the ATM strike K0.
- **Near-term + next-term SPX expiries bracketing 30 days.** The 2022 methodology generalises the legacy "more than 23 days and less than 37 days" window via a "30 Day Bracket Method" `[UNVERIFIED for the exact current PDF wording]`. The worked example uses near-term = 24 days, next-term = 31 days.
- **SOQ (settlement) exception.** At settlement, zero-bid options *are* included and the consecutive-zero-bid filter is disabled — important if you ever pull settlement-day data.

### 4.2 OptionMetrics IvyDB US Reference Manual v5.0 (Jan 2021)

The "Missing Values" section (p. 38) sets IV to the sentinel **−99.99** if any of:

1. Option is a "special settlement" (Special Settlement Flag = 1)
2. Midpoint of bid/ask is below intrinsic value (no-arbitrage violation)
3. IV calculation fails to converge
4. Underlying price not available

IvyDB inverts Black-Scholes (European) or Cox-Ross-Rubinstein binomial (American) on the **bid-ask midpoint** (p. 37); quotes are snapped at 15:59 ET to synchronise with the composite close. Volume and Open Interest are surfaced as raw fields so users apply their own liquidity filter — **IvyDB does not itself drop on low volume/OI**. The often-quoted IV bounds [0.03, 3.00] are `[UNVERIFIED]` as an IvyDB rule — they are a user-side academic convention (Bakshi-Kapadia-Madan 2003 style), not in IvyDB's own exclusion list.

### 4.3 Bid-ask spread filters in academic literature

Goyal & Saretto (2009, *JFE* 94: 310–326) and successors require option **bid > 0**, exclude **midpoint < $0.125** (one-eighth tick), zero-volume rows, and no-arbitrage violators. A **relative-spread < 50%** screen (`(ask − bid)/mid < 0.5`) is widely used in cross-sectional option studies `[UNVERIFIED that this exact 50% number is in Goyal-Saretto 2009 itself; standard in the broader literature]`. **Mid-quote** is the convention because (a) last-trade prints are stale, (b) options trade across 17 US exchanges so last-trade is fragmented, and (c) the NBBO mid is the closest observable to market-maker fair value.

### 4.4 Moneyness bounds

Deep OTM and deep ITM contracts have **vega** close to zero, so a 1-cent quote error becomes a multi-vol-point IV error. Standard restrictions:

- **Delta band** [0.05, 0.95] (sell-side often [0.10, 0.90]).
- **Log-moneyness** roughly within ±2·σ·√T, or strike/spot in [0.8, 1.2] for short-dated equity options.

### 4.5 Time-to-expiry filters

Academic standard: drop **T < 7 calendar days** (gamma/vega collapse, pin risk, microstructure noise) and often **T > 365 days** (LEAPS, wide quotes). VIX itself excludes options with ≤ 7 days to expiry, switching the front/back expiry pair across the 30-day boundary.

### 4.6 Stale-quote / synchronisation filters

Spot S and option mid must be **timestamped within the same second** when inverting IV. Battalio & Schultz (2006, *J. Finance* 61: 2071–2102) show that closing-print stock prices vs closing option quotes can be tens of seconds apart and produce spurious put-call-parity violations. Muravyev & Pearson (2020, *RFS* 33: 4973–5014) document that option quotes lag stock moves by ~30 seconds on average for liquid names, and conventional effective spreads overstate true costs by roughly 3x — so IV computed from naively-snapshotted quotes is systematically biased.

### 4.7 Crossed/locked markets

Always drop rows with **bid ≥ ask** (locked) or **bid > ask** (crossed). These reflect feed errors or in-flight quote updates and crash any inversion routine.

### 4.8 Penny pilot vs nickel-quoted names

Penny-pilot symbols (SPY, QQQ, top ~360 names) quote in $0.01 increments; the rest quote in $0.05 or $0.10. **Use relative spread thresholds, not absolute** — a $0.05 spread on a $1.00 option is 5%, on a $0.10 option is 50%. Hull (2022, ch.20) notes IV from illiquid wide-spread contracts should be discarded rather than smoothed.

---

## Further inquiry

| # | Open gap | Why it matters | Primary vs secondary |
|---|---|---|---|
| 1 | Bloomberg OVME internal vol surface model (SVI? SSVI? proprietary?) | Most buy-side users build against OVME — knowing the underlying model matters for benchmarking | Primary (Bloomberg sales/desk call) |
| 2 | OptionMetrics IvyDB exact CRR step count and convergence acceleration | Affects American IV reproducibility; "large number of subperiods" is vague | Primary (OptionMetrics support) |
| 3 | CME US dividend futures liquidity and term coverage vs Eurex | Determines whether US single-name implied-dividend extraction has a deep listed-curve anchor | Secondary (CME volume reports) |
| 4 | Empirical adoption: which fraction of sell-side equity desks run SSVI vs eSSVI vs proprietary local-vol | Affects what "industry standard" really means in 2026 | Primary (desk interviews) |
| 5 | Tick-data vendor quality comparison (CBOE LiveVol, OPRA direct, Polygon, Tradier) for synchronisation precision | Determines whether retail/mid-tier IV pipelines can hit the Muravyev-Pearson bar | Secondary (vendor docs) + primary (latency tests) |

---

## Consolidated sources

| # | Source | Type | URL |
|---|---|---|---|
| 1 | CBOE, *Volatility Index Mathematics Methodology* (current) | Index white paper | https://cdn.cboe.com/api/global/us_indices/governance/Cboe_Volatility_Index_Mathematics_Methodology.pdf |
| 2 | Hull, J., *Options, Futures and Other Derivatives*, 11e | Textbook (Pearson 2022) | — |
| 3 | OptionMetrics, *IvyDB US File and Data Reference Manual v5.0* (Jan 2021) | Vendor manual | https://usermanual.wiki/Document/IvyDB20US20Reference20Manual.811783665.pdf |
| 4 | OptionMetrics, "Implied Dividend" product | Vendor methodology | https://optionmetrics.com/implied-dividend/ |
| 5 | Buehler, H. (2010), *Volatility and Dividends* | Working paper | https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1141877 |
| 6 | Merton, R. (1973), *Theory of Rational Option Pricing*, Bell J. Econ. | Academic | https://www.jstor.org/stable/3003143 |
| 7 | Bjerksund & Stensland (2002), *Closed-Form Valuation of American Options* | Academic | https://derivativesacademy.com/storage/uploads/files/modules/resources/1703192811_bjerksund_stensland_2002_closed_form_valuation_of_american_options.pdf |
| 8 | Eurex, *Dividend Derivatives Factsheet* + SSDF spec | Exchange | https://www.eurex.com/resource/blob/2687950/5c1a03353630cf01a86516868d888780/data/factsheet-dividend-derivatives.pdf |
| 9 | van Binsbergen, Brandt & Koijen (2012), "Dividend Dynamics and the Term Structure of Dividend Strips", *J. Finance* | Academic | — |
| 10 | Gatheral & Jacquier (2014), "Arbitrage-free SVI volatility surfaces", *Quantitative Finance* | Academic | https://arxiv.org/abs/1204.0646 |
| 11 | Gatheral, J. (2006), *The Volatility Surface: A Practitioner's Guide*, Wiley | Book | https://www.wiley.com/en-us/The+Volatility+Surface-p-9780471792512 |
| 12 | Hagan, Kumar, Lesniewski, Woodward (2002), "Managing Smile Risk", *Wilmott* | Academic | http://www.deriscope.com/docs/Hagan_2002.pdf |
| 13 | Hagan et al. (2014), "Arbitrage-free SABR" | Academic | https://www.researchgate.net/publication/264718376_Arbitrage-free_SABR |
| 14 | Lee, R. (2004), "The Moment Formula for Implied Volatility at Extreme Strikes", *Mathematical Finance* | Academic | http://math.uchicago.edu/~rogerlee/moment.pdf |
| 15 | Roper, M. (2010), "Arbitrage Free Implied Volatility Surfaces" | Working paper | https://www.maths.usyd.edu.au/u/pubs/publist/preprints/2010/roper-9.pdf |
| 16 | Martini & Mingone (2020), "No arbitrage SVI" | Academic | https://arxiv.org/pdf/2005.03340 |
| 17 | Derman, E. (1999), "Regimes of Volatility", *Risk* | Practitioner | — |
| 18 | Goyal & Saretto (2009), "Cross-section of option returns and volatility", *JFE* 94 | Academic | — |
| 19 | Battalio & Schultz (2006), "Options and the Bubble", *J. Finance* 61 | Academic | — |
| 20 | Muravyev & Pearson (2020), "Options Trading Costs Are Lower than You Think", *RFS* 33 | Academic | — |
| 21 | Bloomberg Professional, "Save on Equity Borrow Costs through the Options Market" | Vendor commentary | https://www.bloomberg.com/professional/insights/markets/short-stock-save-equity-borrow-costs-spotting-bargains-options-market/ |
| 22 | Nasdaq (2019), "Pay Attention to Hard to Borrow Rates, Even in Options Trades" | Practitioner | https://www.nasdaq.com/articles/pay-attention-to-hard-to-borrow-rates-even-in-options-trades-2019-11-07 |
