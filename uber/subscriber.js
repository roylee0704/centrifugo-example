import Centrifuge from 'centrifuge';
import WebSocket from 'ws';
import axios from 'axios';

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
console.log(`Login User: ${EMAIL}`);
let accessToken = '';
axios.post('http://localhost:3000/api/auth/provider/login', {
    username: EMAIL,
    password: PASSWORD
}).then(function (response) {
    accessToken = response.data.access_token;
    return axios.get('http://localhost:3000/api/auth/me', {
        headers: { Authorization: `Bearer ${response.data.access_token}` },
    });
}).then(function (response) {

    const userId = response.data.id;
    const centrifuge = new Centrifuge('ws://localhost:8000/connection/websocket', {
        websocket: WebSocket,
        debug: true,
    });
    centrifuge.setToken(accessToken);
    centrifuge.subscribe(`sp/${userId}/jobs/dispatched`, function (message) {
        console.log(`Received Job from Server > ${JSON.stringify(message)}`);
    });
    centrifuge.connect();

}).catch(function (error) {
    console.log(error);
});