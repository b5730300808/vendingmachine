import Axios from './../Hook/useAxios';
export const AddMoney =  async (_json) => {
    return await Axios.post('/Money/AddMoney', _json)
};
export const GetMoney =  async () => {
    return await Axios.get('/Money/GetMoney')
};
export const ResponeCashBack =  async () => {
    return await Axios.get('/Money/ReturnCashBack')
};