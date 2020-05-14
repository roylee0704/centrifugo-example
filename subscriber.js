import Centrifuge from 'centrifuge';
import WebSocket from 'ws';

const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket', {
    websocket: WebSocket
});

const TOKEN = process.env.TOKEN;
centrifuge.setToken(TOKEN);

const CHANNEL_ID = process.env.CHANNEL_ID;
centrifuge.subscribe(CHANNEL_ID, function (message) {
    console.log(message);
});



console.log(centrifuge.connect());