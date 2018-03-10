/*chrome.tabs.query({}, function(tabs){
	for (var i=0;i<tabs.length;i++){
		if(tabs[i].url=="https://docs.google.com/document/d/1qIGyDq4Ohl-_HmI8bAL7l-wbr4vOJiWCGnlkbzLhyNc/edit"){
			chrome.tabs.sendRequest(tabs[i].id,{tabID: tabs[i].id ,msgObj:"tabidsent"});		
					
		}
	}

});*/

chrome.runtime.onInstalled.addListener(function(){
	chrome.storage.sync.set({'isOn' : false},function() {
    	console.log('The isOn is set to false.');});
	
});


chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.storage.sync.get('isOn',function	(data){
		var isOn =data.isOn;
		console.log('value of isOn' ,isOn);
		
		if (isOn){
		 	chrome.storage.sync.set({'isOn' : false},function() {
    				console.log('The isOn is set to false.');
				chrome.browserAction.setIcon({path: 'boy_off.png'});			
			});
			
			
 		}
		else{
			chrome.storage.sync.set({'isOn' : true},function() {
				chrome.browserAction.setIcon({path: 'boy.png'});
				chrome.tabs.executeScript(null,{file:"testScript.js"});
			});
		}
		
								
	});


});



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log('tab updated!'+tabId);
    console.log(tab.url);
    fireUpTestScript(tab);
				
	
});
chrome.tabs.onCreated.addListener(function(tab) {
    console.log('tab created!'+tab.id);
    console.log(tab.url);
    fireUpTestScript(tab);
				
	
});
chrome.tabs.onActivated.addListener(function(info) {
	console.log('tab Activated!');
	chrome.tabs.get(info.tabId, function(tab) {
         console.log(tab.url);
         fireUpTestScript(tab);});
    
});



function fireUpTestScript(tab){
	
	var url = new URL(tab.url);
	
	if(url.protocol!='chrome:'){
		chrome.storage.sync.get('isOn',function(data) {
				var isOn = data.isOn;
				console.log('testscript injected in new tab ');
    				console.log('The isOn is set to true.');
						
				chrome.tabs.executeScript(null,{file:"testScript.js"});
				
		});
	}
}

