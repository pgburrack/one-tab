var viewTabUrl = chrome.extension.getURL('../views/tabs.html');
var container = document.getElementById('container');

// add right click operation
function getAllTabs() {
   return new Promise(function(resolve, reject) {
        chrome.tabs.query({
          currentWindow: true
        }, function(tabs) {
            resolve(tabs);
        });
   });
}

function closeTab(tabId) {
    chrome.tabs.remove(tabId);
}

function filterPinned(tab) {
    return tab.pinned;
}

// On browser action clicked
chrome.browserAction.onClicked.addListener(function(tab) {

  // find if exist and add links to it

  // capture all tabs

  // Open new page
  chrome.tabs.create({
    url: viewTabUrl
  });
  // getAllTabs().then(function(tabs) {
  //   captureTabs(tabs)
  // });
  // close other tabs
  //closeAllTabs(filterPinned);

  // get all tabs in the current window


});

function captureTabs(tabs, callback) {
  tabs.map(function(tab) {

  })
  // captureWindowTabs(chrome.windows.WINDOW_ID_CURRENT, function(yo) {
  //   console.log(yo);
  // })
  // var arr = [];
  // tabs.map(function(tab) {
  //   chrome.tabs.update(tab.id, {active:true}, function() {
  //     chrome.tabs.captureVisibleTab(chrome.windows.WINDOW_ID_CURRENT,{format:"png"}, function(dataURL) {
  //       arr.push(dataURL);
  //       console.log(arr);
  //     });
  //   });
  // })
}



