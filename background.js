chrome.action.onClicked.addListener((tab) => {
    console.log("Extension icon clicked");
  
    // Inject the content script
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['contentScript.js']
    }, () => {
      console.log("Content script injected");
    });
  });
  