import React, { createContext, useState, useContext, useEffect } from 'react'
import {stockAction} from './../action/stock.action'
const StockContext = createContext({})

export function useStockContext() {
    return useContext(StockContext)
}
const initialStock = {
    stocklist:[]
}
function StockProvider({ children }) {
    const [stock,setstock] = useState(initialStock);
    const [stockBackdrop,setstockBackdrop] = useState(false);
    const Getstock = async() =>{
        await setstockBackdrop(true)
        let _stocklist = await stockAction.Get()
        console.log('_stocklist:',_stocklist)
        await setstock({...stock,stocklist:_stocklist.data})
        await setstockBackdrop(false)
    }
    useEffect(()=>{
        Getstock()
    },[])
    const stockStore = {
        stock,
        stockBackdrop,
        setstock
    }
    return (
        <StockContext.Provider value={stockStore}>
            {children}
        </StockContext.Provider>
    )
}

export default StockProvider