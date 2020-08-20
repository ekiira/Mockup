import React from 'react'
import { Tab } from 'semantic-ui-react';
import MainBody from '../main-body/MainBody'

import 'semantic-ui-css/semantic.min.css'

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
  <div className='container-fluid'>
  <Tab 
    menu={{ secondary: true, pointing: true }} 
    panes={panes}  
    defaultActiveIndex={2} 
    className='nav-two-wrapper py-5' 
    />
  
  </div>
)

export default TabExampleSecondaryPointing