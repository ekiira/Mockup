import React, { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux'
import { modules } from '../../actions'

import { Card } from 'react-bootstrap'

// icons/images
import clock from '../../assets/icons/clock.svg'
import dots from '../../assets/icons/more-vertical.svg'
import image from '../../assets/icons/img-1.png'

import './Modules.css'

const Modules = () => {
  const dispatch = useDispatch()
  const meee = useSelector(state => state.modules.modules)
  const modulesData = [
    {
      title: 'Update Logo on all pages ',
      subTitle: '(HTML,& CSS)',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    },
    {
      title: 'Apply gradient colours on the dashboard sidenav',
      subTitle: '',
      dueDate: 'Aug 8',
    }
  ]

useEffect(() => {
  dispatch(modules(modulesData))
}, [])

  return (
   <div className='h-100'>
   <h4> Modules <span className='module-dots pr-2'>
   <img src={dots} alt='dots'/> </span>
    </h4>

   <div className='modules-wrapper w-100 '>
       <ul className='pl-0'>
      {meee.map(({title, subTitle, dueDate }, i) => (
      <li key={i}>
      <Card className='w-100 mb-3 modules-card'>
      <Card.Body>
        <div className='row'>
          <div className='col-8'>
            <Card.Text className='mb-0 modules-card-text'>{title}</Card.Text>
            <Card.Text className='modules-card-text'>{subTitle}</Card.Text>
          </div>
          <div className='col-4'>
            <Card.Text className='text-right'>...</Card.Text>
          </div>
        </div>

        <div className='d-flex justify-content-between pt-2'>
          <div>
            <Card.Text className='modules-card-due mt-1'>
              <img src={clock} alt='clock' className='mr-3'/>
              Due {dueDate}
            </Card.Text>
          </div>
          <Card.Text>
          <img src={image} alt='users' className=''/>
          </Card.Text>
        </div>

      </Card.Body>
      </Card>
      </li>

      ))}
        
         </ul>
   </div>
   </div>
  )
}


export default Modules;