import React from 'react'
import { Link } from 'react-router-dom';
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { RiMailFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { LuArrowUpFromLine } from "react-icons/lu";
import './footer.css'

const Footer = () => {
  return (
   <>
   
   <div className="container-fluid text-light bg-dark">
      <footer className="pt-5 mt-2 mx-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2 text-light"><button className='bg-dark border-0' ><Link to='./' className='link text-dark bg-dark text-white'>Home</Link></button></li>
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./contact' className='link text-dark bg-dark text-white'>Contacts</Link></button></li>
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./venue' className='link text-dark bg-dark text-white'>Booking</Link></button></li>
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./gallery' className='link text-dark bg-dark text-white'>Gallery</Link></button></li>
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./tbogallery' className='link text-dark bg-dark text-white'>TBO</Link></button></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./' className='link text-dark bg-dark text-white'>Home</Link></button></li>
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./about' className='link text-dark bg-dark text-white'>Features</Link></button></li>
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./products' className='link text-dark bg-dark text-white'>Products</Link></button></li>
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./' className='link text-dark bg-dark text-white'>FAQs</Link></button></li>
              <li className="nav-item mb-2"><button className='bg-dark border-0' ><Link to='./about' className='link text-dark bg-dark text-white'>About</Link></button></li>
            </ul>
          </div>
    
          <div className="col-6 col-md-2 mb-3">
            <h5>Contacts</h5>
            <div className="pt-2 contact" id="contacts">
              <p><span className="fw-bold text-warning">Cellphone number:</span><br/> +639178388447</p>
              <p><span className="fw-bold text-warning">Telephone number:</span><br/> (049) 501-8507</p>
              <p><span className="fw-bold text-warning">Address:</span><br/> Brgy.Labuin,Pila, Laguna</p>
            </div>
          </div>
    
          <div className="col-md-5 offset-md-1 mb-3">
            <div>
              <h5>Send us a message</h5>
              <p>We value your comments and suggestions.</p>
              <div className="d-flex flex-column  w-100 gap-2">
                <div className="">
                  <label for="emailA" className="visually-hidden">Email address</label>
                  <input id="emailA" type="text" className="form-control" placeholder="Email address"/>
                </div>
                <div>
                  <label for="contactN" className="visually-hidden">Contact number</label>
                  <input id="contactN" type="text" className="form-control" placeholder="Contact number"/>
                </div>
                <div className="">
                  <input id="message"type="text" placeholder="Send us you message"className="form-control py-4" />
                </div>
              </div>
              <button id="subscribe"className="btn btn-warning mt-4 fw-bold" type="button">Subscribe</button>
            </div>
          </div>
        </div>
    
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <div className='icon d-flex'>
                    <li><RiFacebookBoxFill /></li>
                    <li><RiInstagramFill /></li>
                    <li><RiMailFill /></li>
                    <li><RiTwitterXFill /></li>
            </div>
        </div>
      </footer>
    </div>
    <div className='pageUp'><LuArrowUpFromLine /></div>
   
   </>
  )
}

export default Footer
