const express = require('express');
const SocketServer = require('ws').Server;

const PORT = 3001;

const server = express()
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`listening on ${PORT}`));

const wss = new SocketServer({server});

wss.on('connection', ws => {
    ws.on('message', data =>{
        console.log(data)
        const msgObj= JSON.parse(data)
        console.log(`User ${msgObj.username} said '${msgObj.content}`)

    })
    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
});

