import React from "react";
import { Card } from 'react-bootstrap'

import './QuickOverview.css'

import doc from '../../assets/icons/docs.svg'
const QuickOverview = () => {
  return (
  <div className='h-100'>
  <h4> Quick Overview </h4>
  <Card className='quick-overview-wrapper'>
      <div className='container pt-4 pb-5'>
        <div className='row py-2'>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card' id='orange'>
              <div className='d-flex justify-content-between'>
                <p className='mb-0'>
                <img src={doc} alt='icon'/>
                </p>
                <p className='mb-0 q-overview-num'>20</p>
              </div>
              <div className='q-overview-text'>
                Total Modules
              </div>
            </Card>
          </div>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card' id='grey'>
              <div className='d-flex justify-content-between'>
                <img src={doc}  alt='icon'/>
                <p className='mb-0 q-overview-num'>20</p>
              </div>
              <div className='q-overview-text'>
                Improvement
              </div>
            </Card>
          </div>
        </div>
      
        <div className='row py-2'>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card' id='blue'>
              <div className='d-flex justify-content-between'>
                <img src={doc} alt='icon'/>
                <p className='mb-0 q-overview-num'>14</p>
              </div>
              <div className='q-overview-text'>
                Total <br/>
                Modules test
              </div>
            </Card>
          </div>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card' id='pink'>
              <div className='d-flex justify-content-between'>
                <img src={doc}  alt='icon'/>
                <p className='mb-0 q-overview-num'>20</p>
              </div>
              <div className='q-overview-text'>
                Total Failed
              </div>
            </Card>
          </div>
        </div>
      
        <div className='row py-2'>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card' id='green'>
              <div className='d-flex justify-content-between'>
                <img src={doc} alt='icon'/>
                <p className='mb-0 q-overview-num'>20</p>
              </div>
              <div className='q-overview-text'>
                Total Passed
              </div>
            </Card>
          </div>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card' id='purple'>
              <div className='d-flex justify-content-between'>
                <img src={doc}  alt='icon'/>
                <p className='mb-0 q-overview-num' >20</p>
              </div>
              <div className='q-overview-text'>
                Total Untested
              </div>
            </Card>
          </div>
        </div>
      
        </div>
    </Card>
  
</div>
  )
}

export default QuickOverview;
