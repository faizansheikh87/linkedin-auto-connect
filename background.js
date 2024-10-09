// background.js
chrome.runtime.onInstalled.addListener(() => {
    console.log('LinkedIn Auto Connect Extension Installed');
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      files: ['contentScript.js']
    });
  });
  