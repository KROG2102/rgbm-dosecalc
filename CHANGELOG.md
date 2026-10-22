# Changelog

## 1.2.3 — 22 October 2026
- Display only; no change to model parameters, calculations or display limits.
- Removed the optional whole-cohort Kaplan–Meier overlay (could be misread as observed outcomes for the selected profile or as a model accuracy check).
- Results show the selected regimens (dose / fractions and dose per fraction) above the cards and in the survival-chart legend.
- Larger text for chart labels, card titles, notes and field labels.

## 1.2.2 — 22 October 2026
- Display only; no change to model parameters, calculations or display limits.
- App mode (installed Android app or iOS home-screen app) on phones: opens on Parameters; a live bar shows A/B 12-month OS while inputs change, with a "View results" button; Enter on the last field opens Results.
- Sliding segmented tab indicator, short view fade (200 ms, strong ease-out curve), 160 ms press feedback, overscroll locked in app mode; all motion off under reduced-motion (Emil Kowalski design-engineering guidance).
- Adding ?app=1 to the website address previews app mode in a normal browser.
- Launch screen shortened to about 1.2 s. The browser website keeps the previous layout.

## 1.2.1 — 21 October 2026
- Display only; no change to model parameters, calculations or display limits.
- Regimen colours A #1459b5 (solid) / B #c4530a (dashed), introduced after 1.2.0, are now part of a numbered release.
- Interval labels read "pointwise 95% bootstrap intervals".
- CSV export: surgery shown as Yes/No; header records software version and model snapshot KROG2102-20261006.
- Added meta description.
- Mobile pass (Emil Kowalski mobile-native checklist): tap-highlight removed, touch-action/user-select on controls, hover styles gated to hover-capable pointers, press feedback on :active, numeric/decimal keyboards with enterkeyhint, theme-color.
- Mobile layout: bottom tab bar with safe-area padding, compact A/B stat cards, survival/dose/RN charts drawn at 380-unit width on narrow screens, detailed table fits without horizontal scroll, input errors shown on the Parameters tab.
- Launch screen: icon, title and research-use notice for about 1.6 s, then fades to the calculator (shorter if reduced motion is set).
- Native projects: new launcher icons and splash images (Android adaptive icon, iOS), versionName/MARKETING_VERSION 1.2.1.
- Application identifier set to io.github.krog2102.rgbmdosecalc.
- GitHub Actions workflows: website deployment to GitHub Pages; Android APK build.
- Installable web app (PWA): manifest, icons (new navy icon with A/B curves), network-first service worker for offline use; not registered inside the native Capacitor shell.

## 1.2.0 — 15 October 2026
- Baseline handed over (source commit 5c9f9f569e6ea4bc5764cafe2c5d41ff16d5faf6).
