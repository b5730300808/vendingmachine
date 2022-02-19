import axios from 'axios';
const url = "http://localhost:9000"
const instance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});
export default instance;