import { 
    GetMoneyStock,
    UpdateMoneyStock
} from '../service/MoneyStock';

export const moneystockAction = {
    Get,
    Update
};
async function Get() {
    let response = await GetMoneyStock();
    return response;
}
async function Update(_json) {
    let response = await UpdateMoneyStock(_json);
    return response;
}