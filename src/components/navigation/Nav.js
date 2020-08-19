import React from 'react';
// React bootstrap
import { Navbar, Form, InputGroup, FormControl, Nav, Dropdown, ButtonGroup, Button, NavDropdown }  from 'react-bootstrap';

import './Nav.css';

import calender from '../../assets/icons/calendar.svg'

const Navigation = () => {

return (
 <header  className='nav-two-wrapper'>
    <div className='container'>
    <Navbar bg="light" expand="lg">
  <Nav.Link href="#home">Overview</Nav.Link>
  <Nav.Link href="#home">Teams</Nav.Link>
  <Nav.Link href="#home">Test</Nav.Link>
  <Nav.Link href="#home">Files</Nav.Link>
  <Nav.Link href="#home">Progress</Nav.Link>

    <Nav className="ml-auto " id='nav-two-date'>
      <Nav.Link href="#home" className=''>
     <img src={calender} alt='notification-icon' className='mr-3'/>
        
     Project Deadline:
      
      </Nav.Link>
      <Nav.Link href="#link"> 10-june-2020  </Nav.Link>
    </Nav>
    
</Navbar>
  </div>
 </header>
)
}

export default Navigation;