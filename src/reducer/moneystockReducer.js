import React, { createContext, useState, useContext, useEffect } from 'react'
import { moneystockAction } from '../action/moneystock.action';
import { useStockContext } from './stockReducer';
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
    const [check,setcheck] = useState(false);
    const [moneystockBackdrop,setmoneystockBackdrop] = useState(false);
    const {stockBackdrop} = useStockContext();
    const moneyStockStore = {
        moneyStock,
        setmoneyStock,
        check,
        setcheck,
        moneystockBackdrop,
        setmoneystockBackdrop
    }
    const getValue = async() =>{
        await setmoneystockBackdrop(true)
        const value = await moneystockAction.Get();
        console.log('moneyStock:',value.data)
        setmoneyStock({...moneyStock,moneylist:value.data});
        await setmoneystockBackdrop(false)
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