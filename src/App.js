import { BrowserRouter } from 'react-router-dom';

import RouterApp from './router';
import './App.css';
import Layout from './pages/layout';
import MoneyProvider from './reducer/moneyReducer';
import StockProvider from './reducer/stockReducer';
function App() {
  return (
    <BrowserRouter>
      <MoneyProvider>
        <StockProvider>
          <Layout/>
          <RouterApp />          
        </StockProvider>
      </MoneyProvider>
    </BrowserRouter>
  );
}

export default App;
