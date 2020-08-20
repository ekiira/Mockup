import React from 'react';

// Tab content
import Modules from '../modules/Modules';
import TestCases from '../test-cases/TestCases';
import QuickOverview from '../quick-overview/QuickOverview';

const MainBody = () => (
  <div className='main-body py-3 h-100'>
    <div className='row'> 
    <div className='col-3 pr-0'>
      <Modules />
    </div>
    <div className='col-5 pr-0'>
      <TestCases />
    </div>
    <div className='col-4 pr-0'>
      <QuickOverview/>
    </div>
  </div>
  </div>
);

export default MainBody;
