import React,{useState} from 'react'
import { BsBag } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = ({searchbtn}) => {
  const [search,setSearch] =useState()

  const logout=()=>{
    localStorage.clear();
    window.location.href ='login';
  }
  

  return (
    <>
   <div>
      <div className='free d-flex' >
          
          <div className='shipping_icon'>
            <FaTruck className='text-warning mx-2 my-2'/>
          </div>
          <p className='mx-2 my-2'> Free shipping when shopping upto 3000php</p>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-dark">
          <a className="navbar-brand text-light mz-2" href="./">The <span className='fw-bold'>Brick Oven</span> Cafe</a>
          <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                <li className="nav-item py-2 px-2">
                <Link to='/' className='link'>Home</Link>
                </li>
                <li className="nav-item py-2 px-2">
                <Link to='/about' className='link'>About</Link>
                </li>
                <li className="nav-item py-2 px-2">
                <Link to='/products' className='link'>Menu</Link>
                </li>
                <li className="nav-item py-2 px-2">
                <Link to='/contact' className='link'>Contact</Link>
                </li>
                <li className="nav-item dropdown px-2">
                  <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                  </a>
                  <ul className="dropdown-menu">
                    <Link to='./login' className='link text-dark'>Login</Link>
                    <br></br>
                    <Link to='./login' className='link text-dark'onClick={logout} >Logout</Link>
                  </ul>
                </li>
                <li className="nav-item mt-1 px-2">
                  <Link to='/cart' className='link'><BsBag className='text-light'/></Link>
                </li>
            </ul>
            <div className="d-flex mx-2" role="search">
              <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" onChange={(e)=> setSearch(e.target.value)}></input>
              <button className="btn btn-outline-warning" type="submit" onClick={() => searchbtn(search)}>Search</button>
            </div>
          </div>
        </div>
      </nav>
 </div>
 </>
)
}

export default Nav
