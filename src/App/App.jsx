import Home from '../page/Home/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from '../page/Blog/Blog';
import BlogInfo from '../page/BlogInfo/BlogInfo';
import Contacts from '../page/contacts/Contacts';
import Products from '../page/products/Products';
import Prodinfo from '../page/productinfo/Prodinfo';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/bloginfo' element={<BlogInfo/>} />
          <Route path='/contacts' element={<Contacts/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/prodinfo' element={<Prodinfo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
