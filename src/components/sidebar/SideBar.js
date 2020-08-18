import React from 'react';
import { Nav } from 'react-bootstrap';
import Logo from '../../assets/icons/logo.png'
import Active from '../../assets/icons/active.png'
import Users from '../../assets/icons/users.png'
import LastIcon from '../../assets/icons/last.png'


import './SideBar.css'
const SideBar = () => {

  return (
      <Nav defaultActiveKey="/home" className="flex-column sidebar">
  <Nav.Link href="/home">

<img src={Logo} className='img-fluid' alt='logo' />

  </Nav.Link>
  <Nav.Link eventKey="link-1">
<img src={Active} className='img-fluid' alt='active-icon' />
    
    </Nav.Link>
  <Nav.Link eventKey="link-2">

<img src={Users} className='img-fluid' alt='users-icon' />

  </Nav.Link>
  <Nav.Link eventKey="disabled">
<img src={LastIcon} className='img-fluid' alt='last-icon' />
    
  </Nav.Link>
</Nav>
 
  )
}

export default SideBar;
{/* 
<div className="side d-flex justify-content-center align-items-center">
    <div>
      <div>
        <nav class="flex-column navbar" id="idea">  
          <ul class="navbar-nav">
            <li>
              <a class="nav-link py-3" href="#home"> <img src="./assets/icons/home-icon.svg" alt="home-icon" class="mr-3" /> Home</a>
            </li>  
            <li>
              <a class="nav-link py-3" href="#about"> <img src="./assets/icons/about-icon.svg" alt="about-icon" class="mr-3"/> About</a>
            </li>
            <li> */}
              {/* <a class="nav-link py-3" href="#services"> <img src="./assets/icons/services-icon.svg" alt="service-icon" class="mr-3"/> Services</a>
            </li>
            <li>
              <a class="nav-link py-3" href="#portfolio"> <img src="./assets/icons/portfolio-icon.svg" alt="portfolio-icon" class="mr-3"/> Portfolio</a>
            </li>
            <li>
              <a class="nav-link py-3" href="#testimonials"> <img src="./assets/icons/testimonial-icon.svg" alt="tstimonials-icon" class="mr-3"/> Testimonials</a>
            </li>
            <li>
              <a class="nav-link py-3" href="#contact"> <img src="./assets/icons/contact-icon.svg" alt="contact-icon" class="mr-3"/> Contact</a>
            </li>
        </ul>   
          <!-- <a class="nav-link py-3 active" href="#home"> <img src="./assets/icons/home-icon.svg" alt="home-icon" class="mr-3" /> Home</a>
          <a class="nav-link py-3" href="#about"> <img src="./assets/icons/about-icon.svg" alt="about-icon" class="mr-3"/> About</a>
          <a class="nav-link py-3" href="#services"> <img src="./assets/icons/services-icon.svg" alt="service-icon" class="mr-3"/> Services</a>
          <a class="nav-link py-3" href="#portfolio"> <img src="./assets/icons/portfolio-icon.svg" alt="portfolio-icon" class="mr-3"/> Portfolio</a>
          <a class="nav-link py-3" href="#testimonials"> <img src="./assets/icons/testimonial-icon.svg" alt="tstimonials-icon" class="mr-3"/> Testimonials</a>
          <a class="nav-link py-3" href="#contact"> <img src="./assets/icons/contact-icon.svg" alt="contact-icon" class="mr-3"/> Contact</a> -->
        </nav>
      </div>
    </div>
  
  </div>
  <p class="pt-5 d-flex justify-content-center align-items-end foot">&copy; 2020 John Doe</p>

</section> */}