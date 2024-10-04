// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: false }) // set to `false` to allow regular popups
  .catch((error) => console.error(error));

// Autofill tests
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});
