// main.js

const socket = io(); //establish websocket connection 

socket.on('show-message', (showMessage) => {
    if (showMessage) {
        //Display message 
        //showMessageWithVoice('Object Detected');
        showMessageWithVoice('New Message Content');

    }
});

//to acknowledge the message
function acknowledgeMessage() {
    socket.emit('message-acknowledged');
}
