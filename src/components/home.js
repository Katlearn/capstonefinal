import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
   <>
    <main className="container-fluid">
      <div id="carouselCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./img/slider-1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Get It Hot, Get It Fresh!</h1>
              <p>We Let Our Pizza Do The Talking.</p>
              <p><a className="btn btn-lg btn-warning fw-bold" href="#">See More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/slider-1.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>The right slice at the right place</h1>
              <p>Good food, good friends, and a beautiful backdrop</p>
              <p><a className="btn btn-lg btn-warning fw-bold" href="#">See More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="./img/slider-3.jpg" className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Better Service, Better Business.</h1>
              <p> Never take your customers for granted.</p>
              <p><a className="btn btn-lg btn-warning fw-bold" href="#">See More</a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
    
    <section className="container-fluid p-5" id="card-section">
      <div className="container-fluid">
         <h1 className="text-center fw-bold bg-dark text-white ">Featured Products</h1>
      </div>
      <div className="card-group">
        <div class="card mb-3 max-width: 540px">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./img/menu-5.jpg" class="img-fluid rounded-start" alt="conchinillpo"/>
              </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold">Conchinillo</h5>
                <p cclassName="card-text">Crisp, succulent, with moist and tasty meat that easily falls off the bone, cochinillo is a piglet roasted after feeding on sow’s milk for roughly two to six weeks.</p>
                <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
             </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./img/menu-3.jpg" class="img-fluid rounded-start" alt="conchinillpo"/>
              </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold">Cheesy Spinach Steak</h5>
                <p cclassName="card-text">Pan Grilled butterflied Flank Steak stuffed with spinach, garlic, and cheese. These delicious.</p>
                <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
             </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 max-width: 540px">
            <div className="row g-0">
              <div className="col-md-4">
                <img src="./img/menu-2.jpg" class="img-fluid rounded-start" alt="conchinillpo"/>
              </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title fw-bold">Halo-halo</h5>
                <p cclassName="card-text"> Icy dessert made with frozen milk, leche flan, pandan jelly, sago, mais, nata, banana cinnamon, ube halaya and rice crispies.</p>
                <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
             </div>
            </div>
          </div>
        </div>
        
      </div>
      <Link to="/products">
        <div className='text-end'>See Menu</div>      
      </Link>
      
    </section>

      
    <div className="container-fluid" id="services"> 
       <hr className="featurette-divider"/>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1 p-5">AL FRESCO DINING. <span className="text-body-white">Eat outside and watch the world go by.</span></h2>
            <p className="lead p-5">Relax, refresh, and enjoy an alfresco feast.</p>
          </div>
          <div className="col-md-5 col-sm-12">
            <img className="image-1 img-fluid mx-auto "src="./img/featurette-1.png" alt="tables-img" width="500" height="500" />
          </div>
        </div>
        
    
       <hr className="featurette-divider"/>
   
       <div className="row featurette">
         <div className="col-md-6 order-md-2">
           <h2 className="featurette-heading fw-normal lh-1 p-5">NATIVE TAMPIPI BOXES. <span className="text-body-white">See for yourself.</span></h2>
           <p className="lead p-5">Tampipi Box w/ Lid Made of Woven Pandan/Bariw.</p>
         </div>
         <div className="col-md-6 order-md-1">
           <img className="image-2 img-fluid mx-auto" src="./img/featurette-2.png" alt="GoGreen"width="500" height="500"/>
         </div>
       </div>
   
       <hr className="featurette-divider"/>
   
       <div className="row featurette">
         <div className="col-md-7">
           <h2 className="featurette-heading fw-normal lh-1 p-5">From our kitchen to your heart. <span className="text-body-white">Love is the secret ingredient.</span></h2>
           <p className="lead p-5">Celebrate important events together with your Love Ones.</p>
         </div>
         <div className="col-md-5">
          <img className="image-3 img-fluid mx-auto"src="./img/featurette-3.png" alt="celebrate"width="500" height="500"/>
         </div>
       </div>
   
       <hr className="featurette-divider"/>
       <div className="row featurette">
        <div className="col-md-5 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1 p-5">And lastly, this one. <span className="text-body-white">See for yourself.</span></h2>
          <p className="lead p-5">Experience our very first drive-thru pizza KUBO</p>
        </div>
        <div className="col-md-7 order-md-1">
          <img className="image-4 img-fluid mx-auto"src="./img/featurette-4.png" alt="drive-thru"width="500" height="500"/>
        </div>
      </div>
       
    </div>
    
   
   
   
   
   
   
   </>
  )
}

export default Home
