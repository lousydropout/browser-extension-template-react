# Browser extension template in React

## Installation

Install the packages required for this project:

```bash
$ bun install
```

Test that your installation ran okay:

```bash
$ bun test
```

Finally, build the extension for Chromium/Brave and Firefox:

```bash
$ bun dev
```

This will create a `package/firefox-addon.zip` for Firefox and a `dist/` directory for Chromium/Brave.

For whatever reason(s), Firefox and Chromium-based browsers (i.e. Brave, Chrome, Chromium) expect different formats for their browser extensions. Firefox expects a `XPI` file for the Mozilla-approved version and a `zip` file otherwise (Developer edition). For Chromium-based browsers, you have to provide the path to the directory containing your extracted files.

## Loading the addon into Firefox Developer Edition

Note: "Mozilla requires all extensions to be signed by Mozilla in order for them to be installable in Release and Beta versions of Firefox." (see https://wiki.mozilla.org/Add-ons/Extension_Signing.) As far as I know, [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/) will work. So, we will assume you have `Firefox Developer Edition` installed.

First, we need to disable requiring signatures for Add-ons.

1. On Firefox, go to [about:config](about:config),
2. type in `xpinstall.signatures.required` and set it to `false`.

Then, to install the add-on,

1. On Firefox, go to [about:addons](about:addons).
2. To the right of `Manage Your Extensions`, there is a Settings/Gear icon. Click on it.
3. Select `Install Add-on From File...` and select `firefox-addon.zip`.

## Loading the extension into a Chromium browser (e.g. Chrome and Brave)

1. Go to [chrome://extensions/](chrome://extensions/)
2. Ensure that `Developer mode` is `enabled`.
3. Click on `Load unpacked` and select the `dist/` directory.
