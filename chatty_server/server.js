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
    console.log('Client connected');

    let users = {
        type: 'userCount',
        users: wss.clients.size
    }
    wss.clients.forEach(client => {
        client.send(JSON.stringify(users));
    });
    console.log('wss.clients.size', wss.clients.size);

    ws.on('message', data =>{
        const msgObj= JSON.parse(data)
        msgObj.id = uuidv4()
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(msgObj));
            }
        });
        
    })

    
    
    ws.on('close', () => console.log('Client disconnected'));
});

