import React, { useEffect, useState } from 'react';
import './checkout.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [dataFromLocalStorage, setDataFromLocalStorage] = useState([]);

    useEffect(() => {
      // Retrieve data from localStorage when the component mounts
      const storedDataString = localStorage.getItem('cart');
      if (storedDataString) {
        const parsedData = JSON.parse(storedDataString);
        setDataFromLocalStorage(parsedData);
      }
    }, []);
  
 // Compute the total price for each item
 const computeTotalPrice = (item) => {
    return item.price * item.quantity;
  };
  const [cartTotalPrice, setCartTotalPrice] = useState(null);

  useEffect(() => {
    // Retrieve cart total price from localStorage when the component mounts
    const storedTotalPrice = localStorage.getItem('cartTotalPrice');
    if (storedTotalPrice) {
      setCartTotalPrice(parseFloat(storedTotalPrice));
    }
  }, []);

  //shipping fee
    const [shippingFee, setShippingFee] = useState(0);
    useEffect(() => {
    // Calculate shipping fee based on cart total price
    if (cartTotalPrice !== null) {
      setShippingFee(cartTotalPrice >= 3000 ? 0 : 60); // Example: Free shipping for orders worth $3000 or more
    }
  }, [cartTotalPrice]);


  //total amount
    const ComputedTotalAmount = shippingFee+cartTotalPrice ;
  
//form
const [checkoutData, setCheckoutData] = useState({
    firstname: '',
    lastname:'',
    phonenumber:'',
    emailaddress: '',
    fulladdress: '',
    city:'',
    state:'',
    zipcode:'',
    paymentmethod:'',
    total: 0,
  });
  const handleInputChange = e => {
    setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
  };
  const handleCheckout = async () => {
    try {
      await axios.post('http://localhost:3000/api/checkout', checkoutData);
      alert('Checkout successful!');
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('Error during checkout');
    }
  };

  



  
  return (
   <>
      <div className='py-3 bg-warning'>
        <div className='container'>
            <h4>Checkout</h4>
        </div>
      </div>
      <div className='py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='card'>
                  <div className='card-header'>
                    <h4>Basic Information</h4>
                  </div>
                  <div className='card-body'>
                    <div className='row'>
                      <div className='col-md-6'>
                          <div className='form-group mb-3'>
                              <label>Firstname</label>
                              <input type='text' name='firstname' className='form-control' onChange={handleInputChange}></input>
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className='form-group mb-3'>
                              <label>Lastname</label>
                              <input type='text' name='lastname' className='form-control'onChange={handleInputChange}></input>
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className='form-group mb-3'>
                              <label>Phone Number</label>
                              <input type='text' name='phonenumber' className='form-control'onChange={handleInputChange}></input>
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className='form-group mb-3'>
                              <label>Email Address</label>
                              <input type='text' name='emailaddress' className='form-control'onChange={handleInputChange}></input>
                          </div>
                      </div>
                      <div className='col-md-12'>
                          <div className='form-group mb-3'>
                              <label>Full Address</label>
                              <textarea type='text' name='fulladdress' className='form-control' rows='3'onChange={handleInputChange}></textarea>
                          </div>
                      </div>
                      <div className='col-md-4'>
                          <div className='form-group mb-'>
                              <label>City</label>
                              <input type='text' name='city' className='form-control'onChange={handleInputChange}></input>
                          </div>
                      </div>
                      <div className='col-md-4'>
                          <div className='form-group mb-3'>
                              <label>State</label>
                              <input type='text' name='state' className='form-control'onChange={handleInputChange}></input>
                          </div>
                      </div>
                      <div className='col-md-4'>
                          <div className='form-group mb-3'>
                              <label>Zipcode</label>
                              <input type='text' name='zipcode' className='form-control'onChange={handleInputChange}></input>
                          </div>
                      </div>
                      <div className='col-md-12'>
                          <hr class="my-4"/>

                            <h4 class="mb-3">Payment</h4>

                            <div class="my-3">
                            <div class="form-check">
                                <input id="cod" name="paymentmethod" type="radio" class="form-check-input" checked required onChange={handleInputChange}/>
                                <label class="form-check-label" for="cod">Cash on delivery</label>
                            </div>
                            
                            </div>


                            <hr class="my-4"/>
                            <Link  to='/confirmation'>
                            <button class="w-100 btn btn-warning btn-lg" type="submit" onClick={handleCheckout}>Place Order</button>
                            </Link>
                            
                      </div>

                    </div>
                  </div>
              </div>
              
            </div>
            <div className='col-md-5'>
                
                <div className='checkoutItems'>
                <div>
                    <h1>CART ITEMS</h1>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th scope='col'>ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Category</th>
                            <th scope='col'>QTY</th>
                            <th scope='col'>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {dataFromLocalStorage.map(item => (
                            <tr scope='row' key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.qty}</td>
                            <td>{item.price * item.qty}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                            <div className='totalPrice'>
                                <div className='text-end mb-3'>
                                    {cartTotalPrice !== null && (
                                <div>
                                    <strong>Total Price:</strong> P{cartTotalPrice.toFixed(2)}
                                </div>
                                )}
                                </div>
                            </div>
                            <div className='text-end mb-3'>
                                <strong>Shipping Fee:</strong> P{shippingFee.toFixed(2)}
                            </div>

                            <div className='text-end' name='total' onChange={handleInputChange}>
                                <strong>Total Amount:</strong> P{ComputedTotalAmount.toFixed(2)}
                            </div>
                    </div>

                </div>
 

            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default Checkout
