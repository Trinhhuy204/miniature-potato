
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OrderSytemPage from './component/OrderSytem';


function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path='/' element={<OrderSytemPage />} exact />
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
