import { BrowserRouter } from 'react-router-dom';

import RouterApp from './router';
import './App.css';
import Layout from './pages/layout';
import MoneyProvider from './reducer/moneyReducer';
import StockProvider from './reducer/stockReducer';
import MoneyStockProvider from './reducer/moneystockReducer';
function App() {
  return (
    <BrowserRouter>
      <MoneyProvider>
        <StockProvider>
          <MoneyStockProvider>
            <Layout/>
            <RouterApp />               
          </MoneyStockProvider>
        </StockProvider>
      </MoneyProvider>
    </BrowserRouter>
  );
}

export default App;
