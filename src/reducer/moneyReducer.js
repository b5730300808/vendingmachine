import React, { createContext, useState, useContext } from 'react'

const MoneyContext = createContext({})

export function useMoneyContext() {
    return useContext(MoneyContext)
}
const initialMoney = {
    thousand:'',
    fivehundred:'',
    onehundred:'',
    fifty:'',
    twenty:'',
    ten:'',
    five:'',
    one:'',
    price:0
}
function MoneyProvider({ children }) {
    const [money,setmoney] = useState(initialMoney);
    const onReset = () =>{
        setmoney({
            ...money,
            thousand:'',
            fivehundred:'',
            onehundred:'',
            fifty:'',
            twenty:'',
            ten:'',
            five:'',
            one:'',
        })
    }
    const moneyStore = {
        money,
        setmoney,
        onReset
    }
    return (
        <MoneyContext.Provider value={moneyStore}>
            {children}
        </MoneyContext.Provider>
    )
}

export default MoneyProvider