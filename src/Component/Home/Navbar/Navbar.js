import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
          <h2 class="text-white">GARAZ</h2>
          <div class="collapse navbar-collapse "  id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mt-4">
              <li class="nav-item">
                <Link to="/home" class="nav-link active text-white" aria-current="page" href="#">Home</Link>
              </li>  
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Our Portfolio</a>
              </li>   
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Our Services</a>
              </li>   
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Contact Us</a>
              </li>   
              <li class="nav-item">
                <Link to="/admin" class="nav-link text-white" href="#">Admin</Link>
              </li>  
              <li class="nav-item">
                <Link  to="/login" class="nav-link text-white" href="#">Log in</Link>
              </li>   
            </ul>    
          </div>
        </div>
      </nav>
    );
};

export default Navbar;