import React from 'react';

// React bootstrap
import { Navbar, Form, InputGroup, FormControl, Nav, Dropdown, ButtonGroup, Button }  from 'react-bootstrap';

// Redux
import { useDispatch } from 'react-redux';
import { visibility } from '../../actions'

// Import icons/
import Logo from '../../assets/icons/brandlogo.svg'
import Search from '../../assets/icons//search.svg'
import Notification from '../../assets/icons/bell.svg'
import Owner from '../../assets/icons/owner.svg'
import Rank from '../../assets/icons/rank.svg'
import Photo from '../../assets/icons/top-nav-img.svg'
import Menu from '../../assets/icons/menu.svg'

// Custon css file
import './TopNav.css'

const TopNav = () => {
  const dispatch = useDispatch()

  const handleSideBar = () => {
    dispatch(visibility())
  }
  return (
     <header>
     <Navbar  className='navb'>
      <Nav.Link className='mr-3 d-flex align-items-center' onClick={handleSideBar}>
      <img src={Menu} alt='menu-icon' className=''/>
      </Nav.Link>
      <Navbar.Brand href="/" className='mr-5 fcmb'>
        <img
          alt="logo"
          src={Logo}
          className="d-inline-block align-top mr-3"
        />
      </Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
     <Form inline className='form'>
     <InputGroup>
     <InputGroup.Prepend>
     <InputGroup.Text id="basic-addon1" className='search-text'>
      <img src={Search} alt='Search-Icon' className='img-fluid'/>
     </InputGroup.Text>
     </InputGroup.Prepend>
     <FormControl
     className='pl-0 search-text'
     placeholder="Search"
     aria-label="Search"
     aria-describedby="basic-addon1"
     />
     </InputGroup>
     </Form>
     <Nav className='ml-auto mr-auto'> 
     
     <Nav.Link className='mr-2 d-flex align-items-center'>
     <img src={Notification} alt='notification-icon' className=''/>
     </Nav.Link>
     <Nav.Link className='mr-2 d-flex align-items-center'>
     <img src={Owner} alt='owner-icon' className=''/>
     </Nav.Link>
     <Nav.Link className='mr-2 d-flex align-items-center'>
     <img src={Rank} alt='rank-icon' className=''/>
     </Nav.Link>
     <Nav.Link className='mr-0 d-flex align-items-center pr-0'>
     <img src={Photo} alt='rank-icon' className=''/>
     </Nav.Link>
     
     <Dropdown as={ButtonGroup}>
     <Button variant="none" className='text-left d-menu'>
     <p className='mb-0'> Mark Dawn</p>
     <a href="mailto:Markdawn@natterbase" className='t-nav-mail'>
     Markdawn@natterbase
     </a>
     </Button>
     
     <Dropdown.Toggle split variant="none" id="dropdown-split-basic" className='d-menu'/>
     
     
     
     <Dropdown.Menu >
     <Dropdown.Item href="#/action-1">Mark Dawn</Dropdown.Item>
     <Dropdown.Item href="#/action-2">Mark Dawn</Dropdown.Item>
     <Dropdown.Item href="#/action-3">Mark Dawn</Dropdown.Item>
     </Dropdown.Menu>
     </Dropdown>
     </Nav>
     
     </Navbar.Collapse>
     </Navbar>
   </header>
  )
}

export default TopNav;

