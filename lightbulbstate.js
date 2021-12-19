import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const ip_address = process.env.IP_ADDRESS;
const user = process.env.USERTOKEN;

const endpoint = `http://${ip_address}/api/${user}/lights/1`;

//const state = { 'on': false };

async function listAllBulbs() {
    const result = await axios.get(endpoint);
    console.log(result.data);
}

listAllBulbs();
