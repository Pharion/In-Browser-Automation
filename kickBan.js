var messageCount = 1
setInterval(() => {
    if (messageCount < 100) {
        setTimeout(() => {
console.log("Start kick banning")
            setTimeout(() => {
                document.getElementsByClassName("btn")[1].click()
                setTimeout(() => {
                    document.getElementsByClassName("btn")[2].click()
                    messageCount++;
                }, 5000)
            }, 5000)
        }, 5000)
    }
}, 120000)