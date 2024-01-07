import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from 'react-router-dom';
const About = () => {
  return (
   <>
      <Tabs 
      
      defaultActiveKey="About"
      id="fill-tab"
      className="mb-3 bg-warning mx-2 fw-bold text-light"
      fill
    >
      <Tab eventKey="About" title="About">
      <div className="container col-xxl-8 px-4 py-5">
              <div className="row flex-lg-row-reverse align-items-center g-5 py-5 vh-100 ">
                <div className="col-10 col-sm-8 col-lg-6">
                  <img src='./img/award-1.png' className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" loading="lazy"></img>
                </div>
                <div className="col-lg-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Award winning culinary excellence</h1>
                  <p className="lead text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi earum, sit ratione dolor praesentium debitis quibusdam, mollitia nemo laudantium itaque fugit dolorum voluptate dolore sapiente. Totam odio atque molestias dolores.</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Browse Gallery</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Read more</button>
                  </div>
                </div>
              </div>
            </div>

      </Tab>
      <Tab eventKey="Event-Place" title="Event-Place">
      <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 vh-100 ">
                <div className="col-10 col-sm-8 col-lg-6">
                  <img src='./img/event-place1.png' className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"  loading="lazy"></img>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">The Field </h1>
                    <p className="lead text-dark">All In One Elegance - from ceremony to reception and everything in between at the heart of Pila, Laguna</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button type="button" className="btn btn-warning btn-lg px-4 me-md-2"><Link to='/venue' className='link text-decoration-none text-dark'>Send Inquiry</Link></button>
                      <button type="button" className="btn btn-outline-secondary btn-lg px-4"><Link to='/gallery' className='link text-decoration-none text-dark'>Browse Gallery</Link></button>
                    </div>
                </div> 
            </div>
         </div>
         <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 vh-100 ">
                <div className="col-10 col-sm-8 col-lg-6">
                  <img src='./img/event-place2.png' className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"  loading="lazy"></img>
                </div>
                <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">The Brick-Oven Garden Event Place</h1>
                    <p className="lead text-dark">All In One Elegance - from ceremony to reception and everything in between at the heart of Pila, Laguna</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                      <button type="button" className="btn btn-warning btn-lg px-4 me-md-2"><Link to='/tbogallery' className='link text-decoration-none text-dark'>Browse Gallery</Link></button>
                      <button type="button" className="btn btn-outline-secondary btn-lg px-4">Rates</button>
                    </div>
                </div> 
            </div>
         </div>
                  

      </Tab>
      <Tab eventKey="Features" title="Features">
      <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5 vh-100 ">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src='./img/feature.png' className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700"  loading="lazy"></img>
              </div>
              <div className="col-lg-6">
                  <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Television features </h1>
                  <p className="lead text-dark">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse repellendus illum similique, aspernatur amet repellat magni facilis hic recusandae mollitia natus. Explicabo blanditiis, aut ullam temporibus quisquam deserunt quas optio?</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="button" className="btn btn-warning btn-lg px-4 me-md-2">Book now</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4"><Link to='/videogallery' className='link text-decoration-none text-dark'>Browse Gallery</Link></button>
                  </div>
              </div>
          </div>
       </div>
      </Tab>
    </Tabs>
   
   
   </>
  )
}

export default About
