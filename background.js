function testRequest() {        
 chrome.tabs.query({}, function(tabs){
	for (var i=0;i<tabs.length;i++){
		if(tabs[i].url=="https://docs.google.com/document/d/1S-rkIyxWLIph_fTY8YFzSHzEHvFTqCRxKoF-_i6gIUw/edit"){
			chrome.tabs.sendRequest(tabs[i].id,{tabID: tabs[i].id});		
		}
	}

});
}
