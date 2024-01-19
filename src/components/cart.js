import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";

const Cart = ({cart,setCart}) => {
  //incqty
  const incqty =(product) =>
  {
    const exist =cart.find((x) =>{

      return x.id === product.id
    })
    setCart (cart.map((curElm => {

      return curElm.id === product.id ? {...exist, qty: exist.qty + 1} : curElm

    })))
  }
// dec qty
  const decqty =(product) =>{
    const exist =cart.find((x) => {
      return x.id === product.id

    })
    setCart (cart.map((curElm =>
      {
        return curElm.id === product.id ? {...exist, qty:exist.qty -1 }:curElm

      })))

  }
  // remove product
  const removeproduct = (product) =>
  {
    const exist =cart.find((x) => {
      return x.id === product.id

    })
    if (exist.qty > 0)
    {
      setCart (cart.filter((x) =>
      {

        return x.id !== product.id

      }))
    }
  }
  //total price
  const totalPrice =cart.reduce((price, item)=> price + item.qty * item.price,0)
  //total price to local storage
  
  const saveTotalPriceToLocalStorage = () => {
    
    localStorage.setItem('cartTotalPrice', totalPrice.toString());
  };

  return (
    <>
      <div className='cart_container'>
          {cart.length === 0 &&
          <div className='emptyCart text-center'>
            <h2>Cart is Empty</h2>
            <Link className='btn btn-dark' to='/products'>Shop Now</Link>
          </div>
          
          }
          <div className='content'>
            {
              cart.map((curElm) =>
              {
                return(

                  <div className='card text-center bg-light'>
                        <div className='img_box'>
                          <img src={curElm.image} alt={curElm.name}></img>
                        </div>
                        <div className='detail'> 
                              <h4>{curElm.category}</h4>
                              <h3>{curElm.name}</h3>
                              <h3>{curElm.price}</h3>
                          <div className='qty'>
                              <button className='incqty btn btn-warning' onClick={() => incqty(curElm)}>+</button>
                              <input type='text' value={curElm.qty} className='text-center'></input>
                              <button className='decqty btn btn-warning' onClick={() => decqty(curElm)}>-</button>
                          </div>
                             <h4>Sub total:{curElm.price* curElm.qty}</h4>
                          </div>
                          <div>
                          <button onClick={() => removeproduct(curElm)} className='btn btn-warning'><FaRegTrashAlt /></button>
                        </div>
                   </div>
                )
              })
            }
          </div>
          {
            cart.length >0 && 
            <>
            <div className='text-center'>
                <h2 className='totalPrice text-center fw-bold'>TOTAL :₱{totalPrice}</h2>
                <button className='checkout btn btn-warning btn-lg' type='button'><Link to='/checkout' className='text-dark fw-bold text-uppercase text-decoration-none ' onClick={saveTotalPriceToLocalStorage}>Checkout</Link></button>
            </div>
            
            </>
          }
          
      </div>
    
    
    </>
  )
}

export default Cart
