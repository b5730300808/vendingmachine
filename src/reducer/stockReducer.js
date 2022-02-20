import React, { createContext, useState, useContext, useEffect } from 'react'
import {stockAction} from './../action/stock.action'
const StockContext = createContext({})

export function useStockContext() {
    return useContext(StockContext)
}
const initialStock = {
    stocklist:[],
    title:'',
    img:'',
    price:'',
    amount:''
}
function StockProvider({ children }) {
    const [stock,setstock] = useState(initialStock);
    const [stockBackdrop,setstockBackdrop] = useState(false);
    const [check,setcheck] = useState(false);
    const onReset =()=>{
        setstock({...stock,title:'',img:'',price:'',amount:''})
    }
    const Getstock = async() =>{
        await setstockBackdrop(true);
        let _stocklist = await stockAction.Get();
        await setstock({...stock,stocklist:_stocklist.data});
        await setstockBackdrop(false);
    }
    useEffect(()=>{
        Getstock();
    },[check]);
    const stockStore = {
        stock,
        stockBackdrop,
        setstock,
        setstockBackdrop,
        check,
        setcheck,
        onReset
    }
    return (
        <StockContext.Provider value={stockStore}>
            {children}
        </StockContext.Provider>
    )
}

export default StockProvider