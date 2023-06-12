import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
// import ProductPage from './components/productPage/productPage1';
// import ProductPage from './components/productPage/productPage1';
function App() {
  return <> 
  <Routes>
   <Route path='/' element={ <Home/>}/>
   {/* <Route path='/product' element={ <ProductPage/>}/> */}

  </Routes>
  {/* <Home/> */}
  </>
}

export default App;
