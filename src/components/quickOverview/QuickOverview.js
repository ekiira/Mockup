import React from "react";
import { Card } from 'react-bootstrap'

import './QuickOverview.css'

import doc from '../../assets/icons/doc.svg'
const QuickOverview = () => {
  return (
    <Card className='quick-overview-wrapper h-100'>
      <div className='container py-4'>
        <div className='row py-2'>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card'>
              <div className='d-flex justify-content-between'>
                <img src={doc} alt='icon'/>
                <p className='mb-0'>20</p>
              </div>
              <div>
                Total Modules
              </div>
            </Card>
          </div>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card'>
              <div className='d-flex justify-content-between'>
                <img src={doc}  alt='icon'/>
                <p className='mb-0'>20</p>
              </div>
              <div>
                Total Modules
              </div>
            </Card>
          </div>
        </div>
      
        <div className='row py-2'>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card'>
              <div className='d-flex justify-content-between'>
                <img src={doc} alt='icon'/>
                <p className='mb-0'>20</p>
              </div>
              <div>
                Total Modules
              </div>
            </Card>
          </div>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card'>
              <div className='d-flex justify-content-between'>
                <img src={doc}  alt='icon'/>
                <p className='mb-0'>20</p>
              </div>
              <div>
                Total Modules
              </div>
            </Card>
          </div>
        </div>
      
        <div className='row py-2'>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card'>
              <div className='d-flex justify-content-between'>
                <img src={doc} alt='icon'/>
                <p className='mb-0'>20</p>
              </div>
              <div>
                Total Modules
              </div>
            </Card>
          </div>
          <div className='col-12 col-lg-6'>
            <Card className='px-4 py-4 lil-card'>
              <div className='d-flex justify-content-between'>
                <img src={doc}  alt='icon'/>
                <p className='mb-0'>20</p>
              </div>
              <div>
                Total Modules
              </div>
            </Card>
          </div>
        </div>
      
        </div>
    </Card>
  )
}

export default QuickOverview;
