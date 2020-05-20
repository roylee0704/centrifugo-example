import Centrifuge from 'centrifuge';
import WebSocket from 'ws';
import axios from 'axios';

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
console.log(`Login User: ${EMAIL}`);
axios.post('http://localhost:3000/api/auth/provider/login', {
    username: EMAIL,
    password: PASSWORD
}).then(function (response) {
    const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket', {
        websocket: WebSocket,
        debug: true,
    });
    centrifuge.setToken(response.data.access_token);
    centrifuge.subscribe(`sp/${EMAIL}/jobs/dispatched`, function (message) {
        console.log(`Received Job from Server > ${JSON.stringify(message)}`);
    });
    centrifuge.connect();

}).catch(function (error) {
    console.log(error);
});