console.log("ello there mate, i am the service worker")

chrome.runtime.onMessage.addListener(
    function(emailContent, sender, sendResponse){
        console.log(emailContent);
        (async function(){
            
            //binding all the tabs which match the provided url
            const tabs = await chrome.tabs.query({url: 'https://chat.openai.com/*'});
            //getting the first tab if more than one tabs are opened up with same name
            const tab = tabs[0]
            chrome.tabs.sendMessage(tab.id, emailContent);
        }
        )();
    }
)