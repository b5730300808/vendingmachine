import Axios from '../Hook/useAxios';
export const GetMoneyStock =  async () => {
    return await Axios.get('/MoneyStock/GetMoneyStock')
};
export const UpdateMoneyStock =  async (_json) => {
    return await Axios.post('/MoneyStock/UpdateMoneyStock',_json)
};