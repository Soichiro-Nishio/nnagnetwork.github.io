# Slides Countdown Timer Add-on

This directory contains a simple Google Slides Add-on written in Apps Script that allows you to insert a countdown timer onto the current slide.

## Files

- `Code.gs` – main Apps Script functions.
- `Sidebar.html` – UI displayed in a sidebar for entering the countdown duration.
- `appsscript.json` – manifest configuration for the add-on.

## Usage

1. Deploy as an add-on from the Apps Script editor.
2. In Slides, open **Add-ons > Slides Countdown Timer > Open Countdown Timer** to show the sidebar.
3. Specify minutes and seconds, then click **Insert Timer** to add the countdown time to the selected slide.

The inserted text box contains the total seconds and can be styled or animated manually.
