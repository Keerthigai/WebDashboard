//server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(bodyParser.json());
app.use(express.static('public'));

let showMessage = false;
let message = '';

app.post('/show-message', (req, res) => {
    showMessage = true;
    message = req.body.message || 'Object Detected';
    res.status(200).send('Message received');
    
    io.emit('show-message', message);
});

io.on('connection', (socket) => {
    socket.emit('show-message', showMessage);

    socket.on('message-acknowledged', () => {
        showMessage = false;
    });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/show-popup', (req, res) => {
    if (showMessage) {
        showMessage = false;
        res.json({ showPopup: true, message });
    } else {
        res.json({ showPopup: false });
    }
});
