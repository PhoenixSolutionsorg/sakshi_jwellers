import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductPage from './components/productPage/productPage1';
import Cart from './components/cart/cart';
import Signup from './components/signup/signup';
import ProductDescription from './components/productDescription/productDiscription';
import MyAccount from './components/myAccount/myAccount';
import Contact from './components/contact/contact';
function App() {
  return <> 
  <Routes>
   <Route path='/' element={ <Home/>}/>
   <Route path='/product' element={ <ProductPage/>}/>
   <Route path='/cart' element={ <Cart/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/productDescription' element={<ProductDescription/>}/>
   <Route path='/myAccount' element={<MyAccount/>}/>
  <Route path="/contact" element={<Contact/>}/>
  </Routes>
  {/* <Home/> */}
  </>
}

export default App;
