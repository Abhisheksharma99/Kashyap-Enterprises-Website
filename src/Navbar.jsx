import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import WhiteLogo from './WHITE-LOGO-1.png'
const Navbar = () => {
    return (
        <div>
     
        <nav className="navbar navbar-expand-lg navbar-dark text-light navbarbg">
     <div className="container-fluid flex">
       <a className="navbar-brand rounded rounded-3" href="#"><img src={WhiteLogo} height='80px' width='250px'></img></a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5 fw-bold">
           <li className="nav-item">
             <Link to='/'><a className="nav-link" aria-current="page" href="#">Home</a></Link>
           </li>
           <li className="nav-item">
             <Link to='/aboutus'><a className="nav-link" href="#">About Us</a></Link>
           </li>
           <li className="nav-item">
             <Link to='/blogs'><a className="nav-link" href="#">Blog</a></Link>
           </li>
           <li className="nav-item dropdown">
             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Products
             </a>
             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
               <li><a className="dropdown-item" href="#">Defoamer</a></li>
               <li><a className="dropdown-item" href="#">Silicon Emulsions</a></li>
               <li><a className="dropdown-item" href="#">Paper and Pulp Chemicals</a></li>
               <li><a className="dropdown-item" href="#">Water Treatment Chemicals</a></li>
               <li><a className="dropdown-item" href="#">Car Care Products</a></li>
             </ul>
           </li>
           <li className="nav-item">
             <Link to='/contactus'><a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact Us</a></Link>
           </li>
         </ul>
         <form className="d-flex">
           <input className="form-control me-2 navbarbg text-light border-dark" type="search" placeholder="Search" aria-label="Search"/>
           <button className="btn btn-success" type="submit">Search</button>
         </form>
       </div>
     </div>
   </nav>
       
       </div>
    )
}

export default Navbar
