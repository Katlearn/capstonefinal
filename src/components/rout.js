import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from'./home'
import Product from './products'
import About from './about.js'
import Contact from './contact.js'
import Cart from './cart.js'
import Checkout from './checkout.js'
import Login from './login.js'
import Register from './register.js'
import Venue from './venue.js'
import Gallery from './gallery.js'
import Tbogallery from './tbogallery.js'
import Videogallery from './videogallery.js'
import Confirmation from './confirmation.js';



const Rout = ({product,setProduct,cart,setCart,addtocart}) => {

  // const userToken = localStorage.getItem('token');
  // if((window.location.pathname == '/checkout' )  && !userToken){
  //   window.location.href = 'login';
  // }
     

  return (
    <div>
      <Routes>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Product product={product} setProduct={setProduct} addtocart={addtocart}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/tbogallery' element={<Tbogallery/>}/>
          <Route path='/videogallery' element={<Videogallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/venue' element={<Venue/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path='/checkout'element={<Checkout/>}/>
          <Route path='/confirmation' element={<Confirmation/>}/>
          

          
           
      </Routes>
    </div>
  )
}

export default Rout
