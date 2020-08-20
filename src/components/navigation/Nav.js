import React from 'react'
import { Tab } from 'semantic-ui-react';
import MainBody from '../main-body/MainBody'

import 'semantic-ui-css/semantic.min.css';

import calendar from '../../assets/icons/calendar.svg'

import './Nav.css'

const panes = [
  {
    menuItem: 'Overview',
    render: () => <Tab.Pane attached={false} className='tab-pane'> <MainBody/></Tab.Pane>,
  },
  {
    menuItem: 'Teams',
    render: () => <Tab.Pane attached={false} className='tab-pane'> <MainBody/></Tab.Pane>,
  },
  {
    menuItem: 'Test',

    render: () => <Tab.Pane attached={false} className='tab-pane'> <MainBody/> </Tab.Pane>,
  },
  {
    menuItem: 'Files',
    render: () => <Tab.Pane attached={false} className='tab-pane'> <MainBody/> </Tab.Pane>,
  },
  {
    menuItem: 'Progress',
    render: () => <Tab.Pane attached={false} className='tab-pane'> <MainBody/> </Tab.Pane>,
  },
]

const TabExampleSecondaryPointing = () => (
  <div className='container-fluid tab-wrapper'>
  <Tab 
    menu={{ secondary: true, pointing: true }} 
    panes={panes}  
    defaultActiveIndex={2} 
    className='nav-two-wrapper py-5' 
    />
    <div className='d-flex nav-deadline'>
    <img src={calendar} alt='calendar' className='mr-3' />
    <p className='mr-4 mb-0'>Project Deadline</p>
    <p className='mr-4 mb-0'>10-june-2020</p>
    </div>
  </div>
)

export default TabExampleSecondaryPointing