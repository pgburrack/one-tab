var backgroundPage = chrome.extension.getBackgroundPage();
var promise = backgroundPage.getAllTabs();

promise.then(function(tabs) {

})