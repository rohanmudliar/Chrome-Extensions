chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked (tab) {
    let mess = {
        text: "Hello"
    }
    chrome.tabs.sendMessage(tab.id, mess);
}