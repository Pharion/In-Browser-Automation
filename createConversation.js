var num = 1; var max = 200; setInterval(function () {
	if (num < max) {
		chatLayer.createConversation([{jid: chatLayer.comms.user.jid, role: "owner"}, {jid: "lr2@qasimulation.com", role: "member"}], "Automated Conversation " + num, "This is an autmated conversation.", null, null, {"id":"5","name":"Named Conversation","shortDescription":"Standard conversation where users can be added/removed","sortOrder":50,"colorCode":"#0FA54B","defaultConversationActivityTTL":788400000,"behaviour":{"usePagerUI":false,"chatAvailable":true,"participantCanLeave":true,"ownerCanEditAfterSend":true,"ownerCanCloseEarly":true,"ownerCanAddAdditionalContacts":true,"warnWhenNoContacts":false,"errorWhenNoContacts":false,"canSendAttachmentsWithinConversation":true,"autoRemoveOnClose":false,"namedSettings":{"subjectRequired":true,"subjectFieldLabel":"Title","descriptionRequired":false,"descriptionFieldLabel":""}}}, []);
	}
	num++;
}, 5000);