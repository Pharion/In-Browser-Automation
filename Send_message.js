var messageCount = 85;
var speed = 1;
var totalMsg =5000;
setInterval(() => {

    if (messageCount < totalMsg) {
        console.log("create new message");
        setTimeout(() => {
            var d = new Date();

            if (document.getElementsByTagName("ct-cl-chat-message-list")[0].sendButtonDisabled) {
                console.log('%c send message button is disabled by design', 'color: #33cc33');
            } else {
                console.log('%c Error message button active with no data', 'color: #ff5050');
            }
            document.getElementsByTagName("ct-cl-chat-message-list")[0]._messageTextbox.value = "Message from Laptop: "+ messageCount;

            setTimeout(() => {
                document.getElementsByTagName("ct-cl-chat-message-list")[0].sendButtonDisabled = false;


                setTimeout(() => {
                    console.log("Click To: ");
                    document.getElementsByTagName("ct-cl-chat-message-list")[0]._sendMessage();
                    messageCount++;

                }, 500)
            }, 500)
        }, 500)
    }
}, speed * 60000)  