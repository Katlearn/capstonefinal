import React from 'react'
import './checkout.css';

const Checkout = () => {

    // TOKEN AUTHENTICATION
//   const userToken= localStorage.getItem('token')
//   const getUserData = () => {
//     fetch('http://localhost:3000/user', {
//         method: 'get',
//         headers: {
//             'Authorization': 'Bearer '+ userToken
//         },
//         body: null
//     }).then((result)=>{
//         return result.json();
//     }).then((result)=>{
//         console.log('result: ', result)
//     })
// }
// useEffect(()=>{
//   getUserData();
// },[]) 
    function displayCheckoutItems() {
    const checkoutItemsContainer = document.getElementById("checkoutItems");
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Display checkout items
    cartItems.forEach(item => {
        const checkoutItem = document.createElement("div");
        checkoutItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        checkoutItemsContainer.appendChild(checkoutItem);
    });
}



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
                              <input type='text' name='firstname' className='form-control'></input>
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className='form-group mb-3'>
                              <label>Lastname</label>
                              <input type='text' name='lastname' className='form-control'></input>
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className='form-group mb-3'>
                              <label>Phone Number</label>
                              <input type='text' name='phonenumber' className='form-control'></input>
                          </div>
                      </div>
                      <div className='col-md-6'>
                          <div className='form-group mb-3'>
                              <label>Email Address</label>
                              <input type='text' name='emailaddress' className='form-control'></input>
                          </div>
                      </div>
                      <div className='col-md-12'>
                          <div className='form-group mb-3'>
                              <label>Full Address</label>
                              <textarea type='text' name='fulladdress' className='form-control' rows='3'></textarea>
                          </div>
                      </div>
                      <div className='col-md-4'>
                          <div className='form-group mb-'>
                              <label>City</label>
                              <input type='text' name='city' className='form-control'></input>
                          </div>
                      </div>
                      <div className='col-md-4'>
                          <div className='form-group mb-3'>
                              <label>State</label>
                              <input type='text' name='state' className='form-control'></input>
                          </div>
                      </div>
                      <div className='col-md-4'>
                          <div className='form-group mb-3'>
                              <label>Zipcode</label>
                              <input type='text' name='zipcode' className='form-control'></input>
                          </div>
                      </div>
                      <div className='col-md-12'>
                          <hr class="my-4"/>

                            <h4 class="mb-3">Payment</h4>

                            <div class="my-3">
                            <div class="form-check">
                                <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                                <label class="form-check-label" for="credit">Cash on delivery</label>
                            </div>
                            <div class="form-check">
                                <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
                                <label class="form-check-label" for="debit">Debit card</label>
                            </div>
                            <div class="form-check">
                                <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
                                <label class="form-check-label" for="paypal">PayPal</label>
                            </div>
                            </div>

                            <div class="row gy-3">
                            <div class="col-md-6">
                                <label for="cc-name" class="form-label">Name on card</label>
                                <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                                <small class="text-body-secondary">Full name as displayed on card</small>
                                <div class="invalid-feedback">
                                Name on card is required
                                </div>
                            </div>

                            <div class="col-md-6">
                                <label for="cc-number" class="form-label">Credit card number</label>
                                <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                                <div class="invalid-feedback">
                                Credit card number is required
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="cc-expiration" class="form-label">Expiration</label>
                                <input type="text" class="form-control" id="cc-expiration" placeholder="" required/>
                                <div class="invalid-feedback">
                                Expiration date required
                                </div>
                            </div>

                            <div class="col-md-3">
                                <label for="cc-cvv" class="form-label">CVV</label>
                                <input type="text" class="form-control" id="cc-cvv" placeholder="" required/>
                                <div class="invalid-feedback">
                                Security code required
                                </div>
                            </div>
                            </div>

                            <hr class="my-4"/>

                            <button class="w-100 btn btn-warning btn-lg" type="submit">Place Order</button>
                      </div>

                    </div>
                  </div>
              </div>
              
            </div>
            <div className='col-md-5'>
                
                <div className='checkoutItems'>

                </div>
 

            </div>
          </div>
        </div>
      </div>
   
   </>
  )
}

export default Checkout
