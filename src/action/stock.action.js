import { GetStock} from '../service/Stock';

export const stockAction = {
    Add,
    Get
};
async function Add(_json,totalValue) {
    // let money ={
    //     thousand:_json.thousand,
    //     fivehundred:_json.fivehundred,
    //     onehundred:_json.onehundred,
    //     fifty:_json.fifty,
    //     twenty:_json.twenty,
    //     ten:_json.ten,
    //     five:_json.five,
    //     one:_json.one,
    //     price:totalValue
    // }
    // let response = await AddMoney(money);
    // return response;
}
async function Get() {
    let response = await GetStock();
    return response;
}