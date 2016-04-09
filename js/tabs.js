var backgroundPage = chrome.extension.getBackgroundPage();

var tabsPromise = backgroundPage.getAllTabs();

tabsPromise.then(function(tabs) {
    console.log(tabs);
});

