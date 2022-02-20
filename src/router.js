import React from 'react'
import {
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/home';
import Stock from './pages/stock';
import MoneyStock from './pages/moneystock';
const RouterApp = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/stock" element={<Stock />}/>
            <Route path="/moneystock" element={<MoneyStock />}/>
        </Routes>
    )
}
export default RouterApp;