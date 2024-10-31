import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import image from './Image/products/1.jpg'
import Header from './Components/Header';
import Home from './Pages/Home';
import FooterPage from './Components/FooterPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductDetails from './Pages/ProductDetails';
import Cart from './Pages/Cart';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cartItem,setCardItem]=useState([]);
  return(
    <>
    <BrowserRouter>
      <div>
        <ToastContainer theme='dark' position='top-center'/>
      <Header cartItem={cartItem} setCardItem={setCardItem} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Home/>}/>
         
          <Route path='/product/:id' element={<ProductDetails  cartItem={cartItem} setCardItem={setCardItem}/>}/>
          <Route path='/cart' element={<Cart  cartItem={cartItem} setCartItem={setCardItem}/>}/>
        </Routes>
        <FooterPage/>
      </div>
    </BrowserRouter>
   
    
   
    </>
  )
}

export default App;
