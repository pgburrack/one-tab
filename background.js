var viewTabUrl = chrome.extension.getURL('tabs.html');
// add right click operation
function getAllTabs() {
   return new Promise(function(resolve, reject) {
        chrome.tabs.query({}, function(tabs) {
            resolve(tabs);
        });
   });
}

// On browser action clicked
chrome.browserAction.onClicked.addListener(function(tab) {

  // find if exist and add links to it

  // Open new page
  chrome.tabs.create({
    url: viewTabUrl
  });

  // close other tabs
});