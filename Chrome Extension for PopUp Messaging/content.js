chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage (message, sender, sendResponse) {
  //  console.log(message.text);
    
    
        let paragraph = document.getElementsByTagName('p');
        for (elt of paragraph) {
            elt.innerHTML = message.text;
   // paragraph[i].style['background-color'] = '#C0C';   
    }
}