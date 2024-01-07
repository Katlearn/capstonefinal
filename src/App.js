import React,{useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Nav from './components/nav';
import Footer from './components/footer';
import Rout from './components/rout';
import Productdetail from './components/productdetail'

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];  


function App() {
//add to cart
const [cart,setCart]= useState(cartFromLocalStorage);

  //filter product
  const [product,setProduct]= useState(Productdetail)
   const searchbtn = (product) =>
   {
      const change= Productdetail.filter((x)=>{
         return x.category === product
      })
      setProduct(change)
   }
   // add to cart
   
     
      const addtocart = (product) => 
      {
        const exist =cart.find((x) =>
        {
          return x.id === product.id
        })
        
        if (exist)
        {
          alert ('this item is already added to cart')
        }
        else{
          setCart([...cart,{...product,qty:1}])
          alert('item is added to cart')
        }
      }
    useEffect(() => {
      localStorage.setItem ('cart',JSON.stringify(cart));
    },[cart])

    
  

  return (
    <div>
    
    <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setProduct={setProduct} cart={cart} setCart={setCart} addtocart={addtocart}></Rout>
    <Footer/>
    

    </BrowserRouter>
 
    
    
    </div>
  );
}

export default App;
