import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ip_address = process.env.IP_ADDRESS;
const user = process.env.USERTOKEN;

const endpoint = `http://${ip_address}/api/${user}/lights/1/state`;

const state = {
    "on": true,
    "bri": 254,
    "hue": 41276,
    "sat": 81 
};

async function setBulbState(state) {
    const result = await axios.put(endpoint, state);
    console.log(result.data);
}

setBulbState(state);
