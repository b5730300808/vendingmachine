import React, { createContext, useState, useContext, useEffect } from 'react'
import { moneystockAction } from '../action/moneystock.action';
const MoneyStockContext = createContext({})

export function useMoneyStockContext() {
    return useContext(MoneyStockContext)
}
const initialMoneyStock = {
    name:'',
    moneylist:'',
    amount:''
};
function MoneyStockProvider({ children }) {
    const [moneyStock,setmoneyStock] = useState(initialMoneyStock);
    const [check,setcheck] = useState(true);
    const moneyStockStore = {
        moneyStock,
        setmoneyStock,
        check,
        setcheck
    }
    const getValue = async() =>{
        const value = await moneystockAction.Get();
        console.log('moneyStock:',value.data)
        setmoneyStock({...moneyStock,moneylist:value.data});
    }
    useEffect(()=>{
        getValue();
    },[check])
    return (
        <MoneyStockContext.Provider value={moneyStockStore}>
            {children}
        </MoneyStockContext.Provider>
    )
}

export default MoneyStockProvider