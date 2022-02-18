import { BrowserRouter } from 'react-router-dom';

import RouterApp from './router';
import './App.css';
import Layout from './pages/layout';

function App() {
  return (
    <BrowserRouter>
      <Layout/>
      <RouterApp />
    </BrowserRouter>
  );
}

export default App;
