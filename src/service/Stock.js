import Axios from './../Hook/useAxios';
export const AddMoney =  async (_json) => {
    return await Axios.post('/Stock/AddMoney', _json)
};
export const GetStock =  async () => {
    return await Axios.get('/Stock/Getstock')
};