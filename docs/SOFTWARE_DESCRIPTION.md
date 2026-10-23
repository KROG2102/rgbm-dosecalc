# rGBM DoseCalc — software description for journal submission

Version 1.2.4 • 21 October 2026 • Model snapshot: KROG2102-20261006

## Manuscript paragraph (current status)

An English-language research companion, rGBM DoseCalc (version 1.2.4), was developed to visualise the dose–survival associations estimated in this cohort. The application calculates prescription-based cumulative EQD2 using α/β values of 10 Gy and 3 Gy and compares two reirradiation regimens under the same patient covariates. Survival estimates are derived from the primary quadratic Cox model, adjusted for age at recurrence, Karnofsky performance status, the interval between radiotherapy courses, and salvage surgery. A Breslow baseline cumulative hazard was additionally estimated from the source data to display absolute survival probabilities; pointwise 95% intervals were obtained from 200 patient-level bootstrap resamples. Radiation necrosis is displayed only as documented dose-group proportions with Wilson confidence intervals, without individual or time-specific toxicity prediction. Numerical model reproduction and automated calculation checks were completed. External predictive validation and clinical utility evaluation have not been performed. The software is intended for research and educational exploration, rather than treatment prescription.

## Software availability statement — accurate at this release

rGBM DoseCalc 1.2.4 is a static web application (HTML/JavaScript plus `model.json`). A public deployment address will be recorded here once it is confirmed; until then the earlier public instance (version 1.2.0 with A/B colour update) remains at https://rgbm-dose-explorer.bluepanda2.chatgpt.site. Android/iOS Capacitor project sources exist; signed installation packages and app-store releases do not. Source-code licence and ownership remain for the authors/institution to decide.

## Supplementary methods

- Cohort: 166 patients, 148 deaths. Primary complete-case Cox model: 165 patients, 147 deaths.
- Exposure: z=(cumulative EQD2₁₀−105)/10 and z².
- Covariates, in coefficient order: age at recurrence ≥50 years; KPS ≥80; interval ≥12 months; salvage surgery before reirradiation; z; z².
- Fitting: Efron partial likelihood; coefficients reproduced exactly in this environment against the supplied final analysis archive.
- Absolute survival: Breslow cumulative baseline hazard estimated at event times, then sampled on a 0.25-month grid between 0 and 24 months. This absolute-risk display is an additional analysis beyond the manuscript's reported hazard association.
- Interval estimation: 200 patient-level bootstrap resamples, refitting the same model and baseline hazard; seed 211015. Pointwise percentile intervals. These intervals do not establish calibration or transportability.
- RN: source fields EY and EC; 2/87 below 114 Gy and 10/79 at or above 114 Gy. The observed counts include the source-data timing inconsistencies described in the manuscript. They must not be presented as prospective post-reirradiation incidence estimates.
- EQD2: D(D/n+α/β)/(2+α/β); initial and repeat courses summed without temporal recovery correction.
- No tumour-volume, spatial-overlap, normal-brain DVH or OAR dose model is implemented.
- Native architecture: Capacitor shell, bundled HTML/JavaScript/model parameters. The same calculation code is used by the hosted preview and mobile targets; no remote model service is required for native calculations.

## Completed checks

1. Primary regression coefficients reproduced with zero numerical difference from the supplied archived results.
2. Model sample size, event count and fitted hazard nadir reconciled with the final manuscript: 165, 147 and 103.7986 Gy.
3. RN counts reproduced: 2/87 and 10/79.
4. Automated tests cover representative EQD2 calculations, the 114 Gy classification boundary, monotone survival probabilities, ordered uncertainty limits, dose-range suppression, empty inputs, reset, regimen labels and mobile section switching.
5. Version 1.2.4 (23 October 2026): headless Chromium checks at 1366 px and 390 px widths confirmed reference outputs (absolute tolerance 1e-12), input changes, out-of-range suppression, regimen labels, app-mode navigation, CSV export and absence of console errors.

## Remaining evaluation

Native builds, code signing, emulator/device tests, screenshot-based layout review, accessibility checks on physical devices, numerical parity checks on iOS and Android, and independent predictive validation have not been completed. A versioned reviewer package should include reference input/output cases and the completed evaluation record. Do not imply clinical validation from numerical reproduction alone.

## Authorship and dissemination

The author/institution should confirm software ownership, the source-code licence, corresponding-author contact details, the final bundle identifier and reviewer/public access arrangements. No licence or institutional endorsement has been assigned by this package. No patient-level source workbook is included.
