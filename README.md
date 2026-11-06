# CvyTV

CvyTV is a lightweight, remote-first live-TV directory designed for Hisense VIDAA televisions. This delivery is a browser-testable static build. It includes the TV UI, Kurdish Sorani/Arabic/English localization, RTL support, channel catalogue, local favorites and recents, search, filters, guide-unavailable states, and legal-source playback boundaries.

## Important platform status

This project does **not** claim to be a packaged or installable VIDAA application. VIDAA’s public materials describe an invite-only Partner Portal for authorized developers, but do not publicly document the manifest, signing, SDK, private-installation, or device-testing procedure needed to create a verified VIDAA package. The VIDAA adapter in `src/platform/vidaa.js` therefore reports those capabilities as pending rather than guessing.

CvyTV is not an Android TV application and does not contain an APK.

## Run locally

No Node.js, npm, external packages, backend, database, or API key is required for this static build. On Windows with Python installed, open PowerShell in the project directory and run:

```powershell
py -m http.server 3000 --bind 127.0.0.1
```

If `py` is unavailable but `python` is installed, use:

```powershell
python -m http.server 3000 --bind 127.0.0.1
```

Then open `http://127.0.0.1:3000/` in a modern browser. Do not open `index.html` directly from `file://`; ES modules require an HTTP origin.

The repository also includes a dependency-free PowerShell server for Windows:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .work\scripts\serve-static.ps1 -Root (Get-Location).Path -Port 5555
```

Open `http://127.0.0.1:5555/` when using that command. If a local security policy blocks loopback listeners, use any permitted static-file server or a normal browser preview extension instead.

## GitHub Pages and LAN fallback

The entry point uses relative asset paths and includes `icon.png`, so it is ready for a project site at `https://hawro018.github.io/cvytv/`. See `GITHUB_PAGES_DEPLOYMENT.md` for the exact Pages settings and the current GitHub connector status. `START-CvyTV.bat` starts a Python server on port 8080 for devices on the same Wi-Fi network; use `ipconfig` to find the laptop IPv4 address.

## Remote simulation

The application is designed around the normal TV remote pattern:

- Arrow keys move the visible focus between navigation items, filters, channel cards, buttons, and dialogs.
- Enter/OK activates the focused item.
- Escape/Back closes the player or channel details and returns to the previous view.
- The player includes previous and next channel actions.
- Search can be tested with a normal keyboard; a VIDAA on-screen keyboard still requires validation on the exact TV model.

## Data and legal streaming rules

`src/data/channels.js` contains the requested Kurdish, Iraqi, Arabic, and international channels. The Kurdish catalogue now includes first-party pages for major broadcasters including Rudaw, Kurdistan 24, Kurdistan TV, Kurdsat, Kurdsat News, NRT, Ava Media, Zagros TV, Speda TV, Gali Kurdistan, Waar TV, Payam TV, KurdMax and its subchannels, Zarok TV, Rojhelat TV, Ronahi TV, and Jin TV. Each record has a status, stream type, official website field, and last-verification field. The build contains no fake stream URLs. No channel is marked `Working` unless an authorized playback URL is later verified and added deliberately. Channels marked `Official external link` identify the broadcaster’s first-party page; they are not in-app streams.

The current build intentionally shows `Pending` or `Official external link` states rather than pretending that a channel has a working in-app stream. An official website cannot automatically be converted into an embedded player: many sites block framing, and a live HLS/DASH URL still requires broadcaster authorization and target-device playback verification. EPG data is also intentionally shown as unavailable until a legitimate schedule source is connected. See `KURDISH_CHANNEL_SOURCES.md` for the audited source list and the exact requirements for enabling in-app playback.

## Project files

- `index.html` — static entry point.
- `src/main.js` — application state and UI behavior.
- `src/styles.css` — TV layout and visual system.
- `src/data/channels.js` — catalogue and verification metadata.
- `src/i18n/translations.js` — English, Arabic, and Sorani strings.
- `src/platform/storage.js` — local persistence adapter.
- `src/platform/vidaa.js` — safe VIDAA capability and playback boundary.
- `manus-routes.json` — managed website route manifest served at the website root.
- `app.js` — compatibility entry for the original flat deployment layout.
- `icon.png` — 512×512 launcher icon.
- `START-CvyTV.bat` — Windows LAN fallback launcher.
- `TV-TEST-CHECKLIST.md` — browser, remote, VIDAA, and LAN test checklist.
- `VIDAA_INSTALLATION.md` — documented installation route and blockers.
- `TESTING_REPORT.md` — browser validation and physical-TV limitations.

## Future VIDAA integration

Once VIDAA partner documentation or an authorized hardware test route is available, update only the adapter and packaging layer first. Confirm remote key names, media playback, HLS/DASH/DRM/codec support, local storage behavior, external links, manifest rules, certificates, and private testing before enabling them in the application. Keep the current browser fallback until those capabilities are verified.
