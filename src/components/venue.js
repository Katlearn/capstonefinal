import React from 'react'


const Venue = () => {

  const sendInquiry= function(){
    const inquiryBtn= document.getElementById('submit');
        inquiryBtn.onclick=function(){
        const firstName= document.getElementById('inputFirstName')
        const lastName= document.getElementById('inputLastName')
        const inputOrg=document.getElementById('inputOrganization')
        const flexradio1=document.getElementById('flexRadioYes')
        const flexradio2=document.getElementById('flexRadioNo')
        const event=document.getElementById('inputEvent')
        const email=document.getElementById('inputEmail')
        const contact =document.getElementById('inputContact')
        const address=document.getElementById('inputAddress')
        const address2=document.getElementById('inputAddress2')
        const city= document.getElementById('inputCity')
        const state = document.getElementById('inputState')
        const zipcode=document.getElementById('inputZip')
        const eventDate = document.getElementById ('eventDate')
        const appt = document.getElementById('appt')
        const exit = document.getElementById ('exit')
        const guestNumber = document.getElementById('guestNumber')
        const catererYes= document.getElementById('flexRadioYes')
        const catererNo= document.getElementById('flexRadioNo')
        const message = document.getElementById('Textarea1')
        




        fetch('http://localhost:3000/venue',{
          method:'post',
          headers:{
            'Accept':'application/json',
            'Content-Type':'application/json',
          },
          body: JSON.stringify({
            firstName:firstName.value,
            lastName:lastName.value,
            inputOrg:inputOrg.value,
            flexradio1:flexradio1.value,
            flexradio2:flexradio2.value,
            Event:event.value,
            email:email.value,
            contact:contact.value,
            address:address.value,
            address2:address2.value,
            city:city.value,
            state:state.value,
            zipcode:zipcode.value,
            eventDate: eventDate.value,
            appt: appt.value,
            exit: exit.value,
            guestNumber:guestNumber.value,
            catererYes:catererYes.value,
            catererNo: catererNo.value,
            message: message.value


          })
          }).then(function(result){
            return result.json()
            
          }).then(function(result){
            console.log('result:',result);

              if (result.success){
                alert('inquiry sent');
              }else{
                alert('failed to send');
              }

          })
     
        }
  }

  return (
    <>
    
    <div className="container bg-light">
      <h1 className="mb-5">Venue Booking</h1>
      <div className="mb-3">
        <h2>Required Information</h2>
        <p>Information in the following section marked with an asterisk (*) is required in order to submit this form.</p>
      </div>
      <div className="formInput">
          <div className="row g-2 align-items-center">
              <div className="col-md-6">
                  <label for="inputFirstName" className="form-label">First Name<span className="text-danger fw-700">*</span></label>
                  <input type="name" className="form-control" id="inputFirstName" placeholder="John"/>
                </div>
                <div className="col-md-6">
                  <label for="inputLastName" className="form-label">Last Name<span className="text-danger fw-700">*</span></label>
                  <input type="name" className="form-control" id="inputLastName" placeholder="Doe"/>
                </div>
                <div className="col-6 " >
                  <label for="inputOrganization" className="col-form-label">Organization</label>
                  <input type="name" id="inputOrganization" className="form-control"placeholder=""/>
                </div>
                <div className="col-6 " >
                  <label for="inputEvent" className="col-form-label">Event<span className="text-danger fw-700">*</span></label>
                  <input type="name" id="inputEvent" className="form-control"placeholder="ex. Wedding"/>
                </div>
              
              <div className="mb-5">
                <div>
                  <p>Are you a non-profit organization?<span className="text-danger fw-700">*</span></p>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioYes"/>
                    <label className="form-check-label" for="flexRadioYes">
                      YES
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioNo" checked/>
                    <label className="form-check-label" for="flexRadioNo">
                      NO
                    </label>
                  </div>
                </div>
              </div>
              
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail" className="form-label">Email<span className="text-danger fw-700">*</span></label>
              <input type="email" className="form-control" id="inputEmail"/>
            </div>
            <div className="col-md-6">
              <label for="inputContact" className="form-label">Contact<span className="text-danger fw-700">*</span></label>
              <input type="contact" className="form-control" id="inputContact"/>
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
            <div className='row g-3 mt-5'>
            <div className="col-md-4">
              <div className="eventDate">
                  <label for="eventDate">Event Date:<span className="text-danger fw-700">*</span></label>
                  <input type="date" id="eventDate" name="eventDate" required className='py-1 px-5'/>
              </div>
            </div>
              <div className='col-md-4'>
                <div className='apptTime'>
                  <label for="appt">Access time:<span className="text-danger fw-700">*</span></label>
                  <input type="time" id="appt" name="appt" required className='py-1 px-5'/>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='exitTime'>
                  <label for="exit">Exit time:<span className="text-danger fw-700">*</span></label>
                  <input type="time" id="exit" name="exitTime" required className='py-1 px-5'/>
                </div>
              </div>
            </div>
            <div className='col-12 mt-5'>
                <div className='guest'>
                  <label for="guestNumber">Number of guest:<span className="text-danger fw-700">*</span></label>
                  <input type="text" id="guestNumber" name="guest" required className='py-1 px-5'/>
                </div>
            </div>
              
            <div className='caterer mt-5'>
                  <p>Are you using a outside caterer? Additional 5,000php <span className="text-danger fw-700">*</span></p>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="yes" id="flexRadioYes"/>
                    <label className="form-check-label" for="flexRadioYes">
                      YES
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="no" id="flexRadioNo"/>
                    <label className="form-check-label" for="flexRadioNo">
                      NO
                    </label>
                  </div>
              </div>
              <div>
                <ul>
                    <li>Outside caterers do not have access to kitchen facilities, but do have access to a loading dock as a workstation</li>
                    <li>We require proof of liability insurance and a signed catering contract from a licensed caterer</li>
                </ul>
              </div>
              <div className="form-group mt-5">
                <label for="Textarea1">Any questions and comments</label>
                <textarea className="form-control" id="Textarea1" rows="5"></textarea>
              </div>

            <div className="col-12 mt-5">
              <button id="submit"type="btn" className="btn btn-warning" onClick={sendInquiry}>Send Inquiry</button>
            </div>
          </div>
          

        </div>
    </div>
    
    
    
    
    </>
  )
}

export default Venue
