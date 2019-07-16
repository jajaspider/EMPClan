chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
        file: 'thirdParty/jquery-2.0.3.js'
    });
    chrome.tabs.executeScript(tab.id, {
      file: 'getreply.js'
    });
});
