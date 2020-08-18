import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import Logo from '../../assets/icons/logo.svg'
import Active from '../../assets/icons/active.png'
import Users from '../../assets/icons/users.png'
import LastIcon from '../../assets/icons/last.png'
import ArrowRight from '../../assets/icons/chevron-right.svg'

import './SideBar.css';


const SideBar = () => {
  const visi = useSelector(state => state.navVisibility.navVisible)
  return (
    <div className={visi ? 'sidebar-visi' : 'sidebar-nonvisi'} id='sidebar'>
      <div className='d-flex justify-content-center align-items-center'>
       <div>
        <div>
          <Nav defaultActiveKey="/home" className="flex-column navbar py-1 w-100">
            <Nav.Link href="/home" className='logo-wrapper py-4'>
              <img src={Logo} className='img-fluid' alt='logo' />
            </Nav.Link>
            <div className='logo-wrapper pt-4  pb-5 text-center'>
              <Nav.Link eventKey="link-1" className='py-3'>
                <img src={Active} className='img-fluid' alt='active-icon' />
              </Nav.Link>
              <Nav.Link eventKey="link-2" className='pb-3'>
                <img src={Users} className='img-fluid' alt='users-icon' />
              </Nav.Link>
              <Nav.Link eventKey="link-3" className='pb-3'>
                <img src={LastIcon} className='img-fluid' alt='last-icon' />
              </Nav.Link>
            </div>
   
            <div className='logo-wrapper pt-4  pb-5 mx-5 text-center'>
              <Nav.Link eventKey="link-3" className='py-2 px-2 mb-4 nav-circles'>
                PN
              </Nav.Link>
              <Nav.Link eventKey="link-3" className='py-2 px-2 mb-4 nav-circles'>
                JI
              </Nav.Link>
              <Nav.Link eventKey="link-3" className='py-2 px-2 mb-4 nav-circles'>
                LG
              </Nav.Link>
              <Nav.Link eventKey="link-3" className='py-2 px-2 mb-4 nav-circles'>
                AW
              </Nav.Link>
              <Nav.Link eventKey="link-3" className='py-2 px-2 mb-4 nav-circles'>
                AW
              </Nav.Link>
            </div>
          </Nav>
          <p>
          <img src={ArrowRight} alt='arrow-right' className='img-fluid'/>
        </p>
        </div>
      </div>

    </div>
  </div>
  )
}

export default SideBar;
