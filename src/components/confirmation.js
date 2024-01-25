import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {

  const [totalAmountFromLocalStorage, settotalAmountFromLocalStorage] = useState([]);

  useEffect(() => {
    // Retrieve data from localStorage when the component mounts
    const totalAmount = localStorage.getItem('totalAmount');
    if (totalAmount) {
      const parsedData = JSON.parse(totalAmount);
      settotalAmountFromLocalStorage(parsedData);
    }
  }, []);




  // Get the current date
  const currentDate = new Date();

  // Format the date as a string
  const formattedDate = currentDate.toDateString();

  return (
    <>
    <div className="card text-center p-5">
      <div className="card-header fw-bold">
        <h1>Order confirmation</h1>
      </div>
        <div className="card-body">
          <h5 className="card-title">Order Reference number: <span>#</span></h5>
          <p className="card-text">Total Amount:<span>{totalAmountFromLocalStorage}</span></p>
          <Link to='/'>
              <div className='btn btn-warning'>Home page</div>
          </Link>

        </div>
      <div className="card-footer text-body-secondary">
        {formattedDate}
      </div>
    </div>
    </>
  )
}


export default Confirmation
