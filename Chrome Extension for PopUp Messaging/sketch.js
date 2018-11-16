function setup() {
    noCanvas();
    var userinput = select('#inputtag');
    userinput.input(newText); 
}

function newText() {
    var userinput = select('#inputtag');
    userinput.input(newText); 
    var mess = {
        text: userinput.value()
    }
    
    var params = {
        active: true,
        currentWindow: true
    }
    
    chrome.tabs.query(params, gotTabs);
    
    function gotTabs(tabs) {

       let message = userinput.value();
        chrome.tabs.sendMessage(tabs[0].id, mess);
    }  
}
