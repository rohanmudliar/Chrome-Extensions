console.log("It is running!");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    console.log(message.text);
    if(message.text === "Hello") {
        let filenames = ["dog.jpg", "dog1.jpg", "dog2.jpg", "dog3.jpg", "dog4.jpg",];
        let images = document.getElementsByTagName('img');

        for (imgElt of images) {
            let r = Math.floor(Math.random() * filenames.length);
            let file = 'Dog/' + filenames[r];
            let url = chrome.extension.getURL(file);
            imgElt.src = url;
            console.log(url);
        }
    }
}