// TheShadow.js
​
//if (document.querySelector('ct-alert-modal-manager').shadowRoot.querySelector('ct-alert-modal').getAttribute("showing") != null)
​
var TheShadow = {
​
    newMessage: (test) => {
        var messageText = "Lucas ipsum dolor sit amet organa dantooine hutt darth moff yavin ponda sebulba kenobi jabba. Leia zabrak kamino obi-wan c-3p0 jinn. Leia luke kenobi darth. Darth biggs boba greedo wedge sebulba mace. Mace amidala utapau kessel kashyyyk darth. Obi-wan coruscant watto sebulba padmé hutt dantooine fett jabba. Padmé yoda darth moff yavin sidious. Solo darth anakin dagobah ewok mandalorians. Yavin antilles darth palpatine. Solo coruscant naboo moff lobot bothan sidious skywalker antilles. Ackbar maul naboo dooku tatooine twi'lek darth.";
        console.log(" send message every 50000 ms");
        setInterval(() => {
            var d = new Date();
            var messageInterval
            console.log(" start loop ");
            document.getElementById('btnNewMessage').querySelector('a').click();
            console.log("create new message");
            setTimeout(() => {
                console.log("grap page elements");
                const NewPage = document.querySelector('ct-pg-raise-new-page');
                const Container = NewPage.shadowRoot.querySelector('.container');
                const ToButton = Container.querySelector('.to').querySelector('ct-button').shadowRoot.querySelector('button');
                const ContactSelection = Container.querySelector('ct-pg-contact-selection').shadowRoot.querySelector('.container');
                const GroupTab = ContactSelection.querySelector('.tab:nth-child(2)');
​
                const SendMessage = NewPage.shadowRoot.querySelector('ct-button:nth-child(1)').shadowRoot.querySelector('button');
                setTimeout(() => {
                    console.log("Enter Text");
                    document.querySelector('ct-pg-raise-new-page').newPage = {
                        to: [],
                        type: 0,
                        replyTemplate: 0,
                        subject: d.toUTCString(),
                        message: messageText,
                        audio: [],
                        image: []
                    };
​
                    setTimeout(() => {
                        console.log("Click To: ");
                        ToButton.click();
​
                        setTimeout(() => {
                            console.log("select group");
                            GroupTab.click();
                            var FirstRow = ContactSelection.querySelector('.row:nth-child(1)');
                            const OkSelection = ContactSelection.querySelector('ct-button:nth-child(1)').shadowRoot.querySelector('button');
​
                            setTimeout(() => {
                                console.log("Select the first group");
                                FirstRow.click();
​
                                setTimeout(() => {
                                    console.log("OK selection");
                                    OkSelection.click();
​
                                    setTimeout(() => {
                                        console.log(" Send Message ");
                                        SendMessage.click();
                                    }, 500)
                                }, 500)
                            }, 1000)
                        }, 1000)
                    }, 500)
                }, 500)
            }, 500)
​
​
        }, 50000)
​
    }
​
}

var shadowFetch = "document.querySelector('ct-pg-raise-new-page').shadowRoot.querySelector('.container').querySelector('.content').querySelector('.columns').querySelector('.to').querySelector('ct-button')"
var selectIndiv = "document.querySelector('ct-pg-raise-new-page').shadowRoot.querySelector('.container').querySelector('ct-pg-contact-selection').shadowRoot.querySelector('.container').querySelector('.contacts').querySelector('.inner').querySelector('.row')"
var selectDone = "document.querySelector('ct-pg-raise-new-page').shadowRoot.querySelector('.container').querySelector('ct-pg-contact-selection').shadowRoot.querySelector('.container').querySelector('.buttonsContainer').querySelector('ct-button')"


document.querySelector('ct-pg-new-page-modal').shadowRoot.querySelectorAll('div:nth-child(4)')[0].querySelector('ct-button')