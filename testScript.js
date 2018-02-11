
document.addEventListener('mouseup', function(){
    var thetext = getSelectionText();
    if (thetext.length > 0){ // check there's some text selected
        document.execCommand("copy");// logs whatever textual content the user has selected on the page
        
}
}, false);

function pasteIt(tabId)
      document.execCommand("paste");	
	
}


function getSelectionText(){
 var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
 return text;
}

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        chrome.tabs.executeScript(request.tabID,{code:"alert:("wow");"});
    }
);

