import readline from 'readline';
import axios from 'axios';

const terminal = readline.createInterface({
    input: process.stdin,
});


const API_KEY = process.env.API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID;
const NAME = process.env.NAME;
terminal.on('line', text => {
    const message = { name: NAME, text };

    const payload = {
        "method": "publish",
        "params": {
            "channel": CHANNEL_ID,
            "data": message
        }
    };

    axios.post('http://localhost:8000/api', payload, {
        headers: { Authorization: `apikey ${API_KEY}` }
    }).then(function (response) {
        console.log(`${JSON.stringify(message)} > ${response.status}: ${response.statusText}`);
    }).catch(function (error) {
        console.log(error);
    });

});