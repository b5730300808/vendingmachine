import Axios from './../Hook/useAxios';
export const AddMoney =  async (_json) => {
    return await Axios.post('/Stock/AddMoney', _json)
};
export const GetStock =  async () => {
    return await Axios.get('/Stock/Getstock')
};
export const AddStock =  async (_json) => {
    return await Axios.post('/Stock/AddStock', _json)
};
export const DeleteStock =  async (_json) => {
    return await Axios.post('/Stock/DeleteStock', _json)
};
export const EditStock =  async (_json) => {
    return await Axios.post('/Stock/EditStock', _json)
};