import React from 'react'
import { Link } from 'react-router-dom';
import { RiFacebookBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandShopee } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import { LuArrowUpFromLine } from "react-icons/lu";
import './footer.css'

const Footer = () => {


    const openFb = () => {
      // Specify the URL you want to open in the new window
      const url = 'https://www.facebook.com/thebrickovencafeph';

      // Open a new window or tab
        window.open(url, '_blank');
    }
    const openInsta = () => {
      // Specify the URL you want to open in the new window
      const url = 'https://www.instagram.com/thebrickovencafe/';

      // Open a new window or tab
        window.open(url, '_blank');
    }

    const openShopee = () => {
      // Specify the URL you want to open in the new window
      const url = 'https://shopee.ph/thebrickovencafeph?fbclid=IwAR0jRYwQRq84mLtzcc6z_ju_9E8zGtNMvI356X45R6M22beeOzpImB_sB-w';

      // Open a new window or tab
        window.open(url, '_blank');
    }

    const openLoc = () => {
      // Specify the URL you want to open in the new window
      const url = 'https://www.google.com/maps/place/The+Brickoven+Caf%C3%A9/@14.2439911,121.3690739,17z/data=!3m1!4b1!4m6!3m5!1s0x3397e3dbf8e6287f:0x952c6ffc4545e71c!8m2!3d14.2439911!4d121.3690739!16s%2Fg%2F11jhxmctft?entry=ttu';

      // Open a new window or tab
        window.open(url, '_blank');
    }


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
              <Link to='/contact'>
                <button id="subscribe"className="btn btn-warning mt-4 fw-bold" type="button">Subscribe</button>
              </Link>
              
            </div>
          </div>
        </div>
    
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2023 Company, Inc. All rights reserved.</p>
          <div className='icon d-flex'>
                     <li>
                        <a href="#" onClick={openFb}>
                          <RiFacebookBoxFill />
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={openInsta}>
                        <RiInstagramFill />
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={openShopee}>
                        <TbBrandShopee />
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={openLoc}>
                        <CiLocationOn />
                        </a>
                      </li>
            </div>
        </div>
      </footer>
    </div>
    <div className='pageUp'><LuArrowUpFromLine /></div>
   
   </>
  )
}

export default Footer
