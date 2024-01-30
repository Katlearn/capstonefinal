import React, { useEffect, useState } from 'react';
import './checkout.css';
import axios from 'axios';


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
  const ComputedTotalAmount = shippingFee + cartTotalPrice;
  localStorage.setItem('totalAmount', JSON.stringify(ComputedTotalAmount));

  //form
  const [checkoutData, setCheckoutData] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    emailaddress: '',
    fulladdress: '',
    city: '',
    state: '',
    zipcode: '',
    paymentmethod: '',
    total: localStorage.getItem('cartTotalPrice'),
    items: localStorage.getItem('cart')

  });


  const handleInputChange = e => {
    e.preventDefault();
    setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
  };

  const [highlightedFields, setHighlightedFields] = useState([]);
  const handleCheckout = async () => {
    const { firstname, lastname, phonenumber, emailaddress, fulladdress, city, state, zipcode, paymentmethod } = checkoutData;
  
    // Check if any required field is empty
    if (!firstname || !lastname || !phonenumber || !emailaddress || !fulladdress || !city || !state || !zipcode || !paymentmethod) {
      alert('Please fill in all required fields!');

        // Highlight the required fields
      setHighlightedFields([
        !firstname,
        !lastname,
        !phonenumber,
        !emailaddress,
        !fulladdress,
        !city,
        !state,
        !zipcode,
        !paymentmethod,
      ]);

    } else {
      try {
        const response = await axios.post(`${process.env.REACT_APP_MY_API}/checkout`, checkoutData);
        alert('Checkout successful!');
        window.location.href = `${process.env.REACT_APP_OTHER_URL}/confirmation`;
    } catch (error) {
        console.error('Error during checkout:', error);
        alert('Error during checkout');
    }
    }
  };
  // const highlightRequiredFields = () => {
  //   // Add logic to highlight required fields in your UI
  //   // For example, add a class to the input fields with a red border
  //   document.getElementById('firstname').classList.add('highlight');
  //   document.getElementById('lastname').classList.add('highlight');
  //   document.getElementById('phonenumber').classList.add('highlight');
  //   document.getElementById('emailaddress').classList.add('highlight');
  //   document.getElementById('fulladdress').classList.add('highlight');
  //   document.getElementById('city').classList.add('highlight');
  //   document.getElementById('state').classList.add('highlight');
  //   document.getElementById('zipcode').classList.add('highlight');
  //   document.getElementById('paymentmethod').classList.add('highlight');

  // };









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
                        <label htmlFor="firstname" className={highlightedFields[0] ? 'highlight' : ''}>Firstname</label>
                        <input type='text' name='firstname' id="firstname" className='form-control' onChange={handleInputChange} required></input>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group mb-3'>
                        <label htmlFor="lastname" className={highlightedFields[0] ? 'highlight' : ''}>Lastname</label>
                        <input type='text' name='lastname' id="lastname" className='form-control' onChange={handleInputChange} required></input>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group mb-3'>
                        <label htmlFor="phonenumber" className={highlightedFields[0] ? 'highlight' : ''}>Phone Number</label>
                        <input type='text' name='phonenumber' className='form-control' onChange={handleInputChange} required></input>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group mb-3'>
                        <label htmlFor="emailaddress" className={highlightedFields[0] ? 'highlight' : ''}>Email Address</label>
                        <input type='text' name='emailaddress' className='form-control' onChange={handleInputChange} required></input>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <div className='form-group mb-3'>
                        <label htmlFor="fulladdress" className={highlightedFields[0] ? 'highlight' : ''}>Full Address</label>
                        <textarea type='text' name='fulladdress' className='form-control' rows='3' onChange={handleInputChange} required></textarea>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='form-group mb-'>
                        <label htmlFor="city" className={highlightedFields[0] ? 'highlight' : ''}>City</label>
                        <input type='text' name='city' className='form-control' onChange={handleInputChange} ></input>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='form-group mb-3'>
                        <label htmlFor="state" className={highlightedFields[0] ? 'highlight' : ''}>State</label>
                        <input type='text' name='state' className='form-control' onChange={handleInputChange} required></input>
                      </div>
                    </div>
                    <div className='col-md-4'>
                      <div className='form-group mb-3'>
                        <label htmlFor="zipcode" className={highlightedFields[0] ? 'highlight' : ''}>Zipcode</label>
                        <input type='text' name='zipcode' className='form-control' onChange={handleInputChange} rquired></input>
                      </div>
                    </div>
                    <div className='col-md-12'>
                      <hr className="my-4" />

                      <h4 className="mb-3">Payment</h4>

                      <div className="my-3">
                        <div className="form-check">
                          <select name="paymentmethod" className="box" onChange={handleInputChange} required>
                            <option value="" disabled selected>Select payment method --</option>
                            <option value="cash on delivery">Cash on delivery</option>
                            <option value="pick up">Pick Up</option>
                            {/* Other payment options */}
                          </select>
                        </div>

                      </div>


                      <hr className="my-4" />

                      <button className="w-100 btn btn-warning btn-lg" type="submit" onClick={handleCheckout}>Place Order</button>


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
