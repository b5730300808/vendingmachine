import axios from 'axios';
const url = "https://vendingmachine-api-jobjab.herokuapp.com"
const instance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});
export default instance;