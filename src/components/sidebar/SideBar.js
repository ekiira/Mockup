import React from 'react';
import { useSelector } from 'react-redux';
import { Nav } from 'react-bootstrap';
import Logo from '../../assets/icons/logo.svg'
import Active from '../../assets/icons/active.svg'
import Users from '../../assets/icons/users.svg'
import LastIcon from '../../assets/icons/last.svg'
import ArrowRight from '../../assets/icons/chevron.svg'

import Pw from '../../assets/icons/PN.svg'
import Ji from '../../assets/icons/JI.svg'
import Lg from '../../assets/icons/LG.svg'
import Aw from '../../assets/icons/AW.svg'
import Aw2 from '../../assets/icons/AW@.svg'


import './SideBar.css';


const SideBar = () => {
  const visi = useSelector(state => state.navVisibility.navVisible)
  return (
    <div className={visi ? null : 'sidebar-nonvisi'} id='sidebar'>
      <div className='d-flex justify-content-center align-items-center mm'>
       <div>
        <div>
          <Nav defaultActiveKey="/home" className="flex-column navbar py-1 w-100 h-100">
            <Nav.Link href="/home" className='logo-wrapper py-3'>
              <img src={Logo} className='' alt='logo' />
            </Nav.Link>
            <hr/>

            <div className='logo-wrapper text-center'>
              <Nav.Link eventKey="link-1" className='py-3'>
                <img src={Active} className='' alt='active-icon' />
              </Nav.Link>
              <Nav.Link eventKey="link-2" className='pb-3'>
                <img src={Users} className='' alt='users-icon' />
              </Nav.Link>
              <Nav.Link eventKey="link-3" className='pb-3'>
                <img src={LastIcon} className='' alt='last-icon' />
              </Nav.Link>
            </div>

            <hr/>
            <div className='logo-wrapper text-center'>
              <Nav.Link href="/home" className='py-2'>
                <img src={Aw} className='w-100' alt='logo' />
              </Nav.Link>
              <Nav.Link href="/home" className='py-2'>
                <img src={Ji} className='w-100' alt='logo' />
              </Nav.Link>
              <Nav.Link href="/home" className='py-2'>
                <img src={Lg} className='w-100' alt='logo' />
              </Nav.Link>
              <Nav.Link href="/home" className='py-2'>
                <img src={Aw} className='w-100' alt='logo' />
              </Nav.Link>
              <Nav.Link href="/home" className='py-2'>
                <img src={Aw2} className='w-100' alt='logo' />
              </Nav.Link>
            </div>
          <hr/>
           
          </Nav>

          <Nav.Link href="/home" className='pt-3 bottom'>
          <img src={ArrowRight} alt='arrow-right' className='img-fluid'/>

              </Nav.Link>
        </div>
      </div>

    </div>
  </div>
  )
}

export default SideBar;
