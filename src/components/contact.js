import React from 'react'

const Contact = () => {
  const sendButton = function(){
    const submitBtn = document.getElementById('sendMess')
      submitBtn.onclick = function(){
        const fe_firstName = document.getElementById('inputFirstName')
        const fe_lastName = document.getElementById('inputLastName')
        const fe_contact = document.getElementById('inputContact')
        const fe_email = document.getElementById('inputEmail')
        const fe_address = document.getElementById('inputAddress')
        const fe_address2 = document.getElementById('inputAddress2')
        const fe_city = document.getElementById('inputCity')
        const fe_state = document.getElementById('inputState')
        const fe_zipcode = document.getElementById('inputZip')
        const fe_message = document.getElementById('textMessage')

        fetch ('http://localhost:3000/contact',{
          method: 'post',
          headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            fe_firstName:fe_firstName.value,
            fe_lastName:fe_lastName.value,
            fe_contact:fe_contact.value,
            fe_email:fe_email.value,
            fe_address:fe_address.value,
            fe_address2:fe_address2.value,
            fe_city:fe_city.value,
            fe_state:fe_state.value,
            fe_zipcode:fe_zipcode.value,
            fe_message:fe_message.value

          })
        }).then(function(result){
          return result.json()
          
        }).then(function(result){
          console.log('result:',result);

            if (result.success){
              alert('message sent');
            }else{
              alert('failed to send');
            }

        })

      }




  }

  return (
   <>
    <div className='container mt-5 shadow'>
      <div className='row'>
       
        <div className='col-md-12 p-5'>
          <h2 className='mb-5'>Get in touch</h2>
              <div className="row g-3">
                <div className="col-md-6">
                  <label for="inputFirstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="inputFirstName" placeholder="John"/>
                </div>
                <div className="col-md-6">
                  <label for="inputLastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="inputLastName" placeholder="Doe"/>
                </div>
                <div className="col-md-6">
                  <label for="inputContact" className="form-label">Contact number</label>
                  <input type="number" className="form-control" id="inputContact" placeholder="+63 (10-digit number)"/>
                </div>
                <div className="col-md-6">
                  <label for="inputEmail" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="inputEmail" placeholder="john.doe@gmail.com"/>
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">City</label>
                  <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">State</label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>Laguna</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip"/>
                </div>
                <div className="mb-3">
                  <label for="textMessage" className="form-label">Your Message</label>
                  <textarea className="form-control" id="textMessage" rows="3"></textarea>
                </div>
                <div className="col-12">
                  <button id='sendMess' type="btn" className="btn btn-warning btn-lg" onClick={sendButton}>Send</button>
                </div>
              </div>
        </div>
      </div>
    </div>
   
   
   
   
   </>
  )
}

export default Contact
