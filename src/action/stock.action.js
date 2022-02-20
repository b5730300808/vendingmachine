import { GetStock,AddStock,DeleteStock,EditStock} from '../service/Stock';

export const stockAction = {
    Add,
    Get,
    Delete,
    Edit
};
async function Add(image){
    let response = await AddStock(image);
    return response;
}
async function Delete(image){
    let response = await DeleteStock(image);
    return response;
}
async function Edit(image){
    let response = await EditStock(image);
    return response;
}
async function Get() {
    let response = await GetStock();
    return response;
}