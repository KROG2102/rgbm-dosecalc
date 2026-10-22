# rGBM DoseCalc 1.2.2

Website: https://krog2102.github.io/rgbm-dosecalc/  ·  Android installer: see the Releases page of this repository.

English-language research companion to the KROG 21-02 dose–survival analysis. It uses the same offline calculation code for the web, Android and iOS targets.

## Status

- English web interface: implemented.
- Numerical and interface-logic checks: automated tests in `tests/app.test.cjs`.
- Android and iOS: Capacitor project source; not a signed or device-tested release.
- External predictive validation and clinical utility: not performed.
- No original patient-level workbook is included.

## Setup

Node.js 22 or newer:

```sh
npm ci
npm run check
npm run sync
```

Open the generated projects:

```sh
npm run android
npm run ios
```

Android requires Android Studio and the Android SDK. iOS requires macOS and Xcode. Select your developer team and signing identity in the platform tools. The application identifier is `io.github.krog2102.rgbmdosecalc` (set 22 October 2026, before the first installable build). No signing identities, team IDs or release keystores are supplied.

A release Android build produces an APK/AAB using Gradle/Android Studio. An iOS archive requires Xcode and signing/provisioning for the selected distribution route. Neither release is supplied in this source package.

The model, scripts and interface are bundled under `dist/`; no `server.url` points to the hosted website. Native calculations therefore do not require a network model endpoint. The Share button opens the native share sheet with a text summary; the web Export button downloads CSV. A share action occurs only after the user presses the button and chooses a destination.

## Manuscript materials

See `docs/SOFTWARE_DESCRIPTION.md` for an accurate current-status manuscript paragraph, methods and availability statement. Do not claim app-store availability, independent calibration or clinical validation before these have been completed.

## Runtime dependencies

Capacitor core/Android/iOS/CLI 8.5.3; Capacitor Share 8.0.3. See the lockfile for exact transitive dependencies. Capacitor is used according to its official documentation: https://capacitorjs.com/docs/getting-started and https://capacitorjs.com/docs/getting-started/environment-setup.

## Privacy

No patient-level data or direct identifiers are bundled. The app does not persist profile inputs or add analytics. Inputs remain in memory until the application is closed or reloaded. Exported/shared results are generated only on user action. Hosted-platform infrastructure is separate from the offline native package.

## Licensing

The author/institution must select the release licence and confirm ownership before public redistribution. No open-source licence is assigned by this development package. Third-party dependencies retain their own licences.
