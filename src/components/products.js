import React from 'react'
import Productdetail from './productdetail'
import './products.css'
import { AiOutlineShoppingCart } from "react-icons/ai";

  

const Product = ({product,setProduct,addtocart}) => {
  const filterproduct =(product) =>
  {
    const update =Productdetail.filter((x) =>{
     return x.category === product;
    })
      setProduct(update);
  }
  const Allproduct =() =>{
    setProduct(Productdetail);
  }
  
  
  return (
    <>
        
        <div className='product'>
            <h2>#Products</h2>
            <p>Home.Products</p>
            <div className='container'>
                <div className='filter'>
                    <div className='categories'>
                        <h3>Categories</h3>
                            <ul className=''>
                                <li onClick={()=> Allproduct()}>All</li>
                                <li onClick={()=> filterproduct("pizza")}>Pizza</li>
                                <li onClick={()=> filterproduct("steak")}>Steak</li>
                                <li onClick={()=> filterproduct("lechon")}>Lechon</li>
                                <li onClick={()=> filterproduct("pasta")}>Pasta</li>
                                <li onClick={()=> filterproduct("beverage")}>Beverage</li>
                            </ul>
                      </div>
               </div>
            </div>
                <div className='productbox'>
                      <div className='content'>
                        {
                          product.map((curElm)=>
                          {
                            return(
                              <div className='card text-center' key={curElm.id}>
                                  <div className='img_box'>
                                    <img src={curElm.image} alt={curElm.name}></img>
                                  <div className='icon mt-2'>
                                    <li onClick={()=> addtocart(curElm)}><AiOutlineShoppingCart/> Add to Cart</li>
                                    
                                  </div>
                                </div>
                                <div className='detail'>
                                    <p>{curElm.category}</p>
                                    <h5>{curElm.name}</h5>
                                    <h5>{curElm.price}</h5>
                                </div>
                              </div>
                            )
                          }
                          
                          )
                        }
                      </div>

                  </div>
              </div>
        
            
       
    </>
  )
}

export default Product
