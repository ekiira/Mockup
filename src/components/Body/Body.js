import React from 'react';

import { useSelector } from 'react-redux'

import Nav from '../navigation/Nav'
import TopNav from '../top-navigation/TopNav';

import './Body.css'

const Body = () => {
  const visible = useSelector(state => state.navVisibility.navVisible)

  return(
  <div className='body' id={visible ? 'navb-visi' : 'navb-nonvisi'}>
    <TopNav />
    <Nav />
  </div>
);
  }
export default Body;
