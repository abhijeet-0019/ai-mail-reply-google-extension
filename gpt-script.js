console.log("hello this is gpt script")

chrome.runtime.onMessage.addListener(
    function(emailContent, sender, sendResponse){
        console.log(emailContent);
    }
)