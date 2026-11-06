# CvyTV Family Edition v2.1

A lightweight HTML/CSS/JavaScript TV interface for Kurdish, Iraqi, Arab and international channel directories. It is designed for remote-control navigation and browser testing on a Hisense VIDAA TV.

## What changed in v2.1

- Added Sorani Kurdish, Arabic and English interface languages with RTL support.
- Added Kurdish, Iraqi, Arab and International categories.
- Expanded the directory with official broadcaster pages where known.
- Improved directional focus navigation for a TV remote; added Back and media-key handling.
- Added a real HTML5 `<video>` player path for streams that you are authorized to use.
- Added a device diagnostics panel for browser, screen size, native HLS, Media Source Extensions and local storage.
- Favorites and recently watched remain local to the device/browser.

## Important playback status

**No direct stream URLs are included.** A broadcaster website is not the same thing as permission to embed or redistribute its stream. Channel cards currently open an official broadcaster page where one is known; otherwise they show that an official link still needs to be added.

Only add a `streamUrl` in `app.js` when:
1. You own the stream or have written permission to use it in CvyTV.
2. The broadcaster/rights-holder permits the intended embedding or distribution.
3. The stream format and playback have been tested on your exact TV model and firmware.

For HLS, the player first tries the TV browser's native HLS support. An optional Hls.js build can be added locally if the TV supports Media Source Extensions. This project does not include Hls.js, a DRM integration, or any private IPTV playlist. DRM/protocol requirements for VIDAA partner apps are supplied by VIDAA after its partner/NDA process.

## Preview on your Windows laptop

1. Extract the project ZIP.
2. Open the `cvytv` folder.
3. Double-click `START-CvyTV.bat`. It shows your network details and starts the local server.
4. On the laptop, open `http://localhost:8080`.

If Windows asks, allow Python through Windows Firewall on your **Private network**. Keep the black server window open during testing.

## Test on your Hisense TV (browser route)

This is a **development test**, not a permanent app installation.

1. Connect the TV and laptop to the same home network.
2. On Windows, run `ipconfig` and note the laptop's IPv4 address (usually something like `192.168.1.20`).
3. Keep the Python server running.
4. Open the TV's built-in browser, if your model has one.
5. Enter `http://LAPTOP-IP:8080` (replace `LAPTOP-IP` with the actual IPv4 address).
6. Test the arrow keys, OK/Enter, Back, search, language switching, favorites, recent list and the device-test panel.
7. If the page does not load, check that Windows Firewall allows Python on your private network and that both devices are on the same network. Some TV browsers may reject local HTTP pages or may not include a browser at all; this must be checked on the exact model.

When finished, stop the local server with `Ctrl+C` in PowerShell.

## Official VIDAA app deployment

VIDAA's public partner information says it supports HTML5 apps, but detailed streaming/DRM specifications are shared after its partner/NDA process. Official store/launcher placement is handled through VIDAA's partner process; this is different from opening a URL in the TV browser. Do not assume a universal USB sideload method or use unofficial firmware/DNS/debug exploits.

Official starting points:
- VIDAA support and TV OS-version instructions: https://www.vidaa.com/support/
- VIDAA partner information: https://www.vidaa.com/is-ortaklari/

## Find your exact TV model and VIDAA version

On the TV:
1. Press **Home**.
2. Open **Settings → Support → About**.
3. Record the TV model and the full software/firmware version shown there.
4. VIDAA says its OS version is the two digits after `V0000.0` (for example, `9.0`).
5. If the model is not shown in About, check the model sticker on the back of the TV.

Do not send the serial number. The model number and software/firmware version are enough for the next compatibility check.

## Add an authorized stream

In `app.js`, locate the channel object and add a `streamUrl` only after you have permission and a verified URL. Example shape (placeholder only; not a real stream):

```js
{
  id: 'example-channel',
  name: 'Example Channel',
  category: 'Kurdish',
  short: 'EX',
  officialPage: 'https://broadcaster.example/watch',
  pageKind: 'watch',
  streamUrl: 'https://authorized.example/live.m3u8',
  streamType: 'hls'
}
```

Do not copy stream URLs from third-party IPTV apps, playlists or channel directories unless the rights-holder has explicitly authorized that use.

## Current limitations

- This is still a browser-based prototype, not a signed VIDAA package or store-published app.
- Official pages can change, require cookies, be geo-restricted, or refuse playback in the TV browser.
- A page link being present does not mean its live video can be embedded in CvyTV.
- Native HLS, codecs, remote key codes, browser storage and memory limits must be tested on the actual TV.
- Android TV packaging is not included in this VIDAA-focused build.
