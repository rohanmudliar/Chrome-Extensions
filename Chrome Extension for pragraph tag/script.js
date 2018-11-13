console.log("Your Chrome updated extension 2 is running.");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage (message, sender, sendResponse) {
  //  console.log(message.text);
    
    if (message.text === "hello") {
        let paragraph = document.getElementsByTagName('p');
        for (let i=0 ; i<paragraph.length ; i++) {
    paragraph[i].innerHTML = 'Rohan';
   // paragraph[i].style['background-color'] = '#C0C';
        }
    }
}