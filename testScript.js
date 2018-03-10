'use strict'
function getSelectionText(){
 var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
 return text;
}

function copyText(){
	chrome.storage.sync.get('isOn',function(data){
	var isOn =data.isOn;
	if(isOn){
	console.log('copy text func activated');
	var thetext = getSelectionText();
    	if (thetext.length > 0){ // check there's some text selected
    	    	document.execCommand("copy");// logs whatever textual content the user has selected on the page        
    	}
	}	
	});	
}

document.addEventListener('pointerup',copyText);

	 












