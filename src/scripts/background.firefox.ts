import browser, { Runtime, windows } from "webextension-polyfill";

// Allows users to open the sidebar (Firefox)
browser.sidebarAction
  .setPanel({ panel: "side_panel/index.html" }) // Set your Firefox sidebar panel here
  .catch((error) => console.error(error));

// Autofill tests
browser.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// Listener for the extension icon click
browser.pageAction.onClicked.addListener(async () => {
  if (
    await browser.sidebarAction.isOpen({ windowId: windows.WINDOW_ID_CURRENT })
  ) {
    // Close the sidebar
    browser.sidebarAction.close();
  } else {
    // Open the sidebar
    browser.sidebarAction.open();
  }
});
