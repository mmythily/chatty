const express = require('express');
const WebSocket = require('ws');
const uuidv4 = require('uuid/v4');


const PORT = 3001;

const server = express()
    .use(express.static('public'))
    .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`listening on ${PORT}`));

// const wss = new SocketServer({server});
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
    ws.on('message', data =>{
        const msgObj= JSON.parse(data)
        msgObj.id = uuidv4()
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(msgObj));
            }
            console.log(client)
        });
        console.log(msgObj)
    })

    console.log('Client connected');
    ws.on('close', () => console.log('Client disconnected'));
});

