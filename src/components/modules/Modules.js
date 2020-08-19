import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { modules } from '../../actions'

import { Card } from 'react-bootstrap'

import clock from '../../assets/icons/clock.svg'

import './Modules.css'

const Modules = () => {
  const dispatch = useDispatch()
  const meee = useSelector(state => state.modules.modules)
const modulesData = [
  {
    title: 'Update Logo on all pages ',
    subTitle: '(HTML,& CSS)',
    dueDate: 'Aug 8',
    images: 'aa' 
  },
  {
    title: 'Apply gradient colours on the dashboard sidenav',
    subTitle: '',
    dueDate: 'Aug 8',
    images: 'aa' 
  },
  {
    title: 'Apply gradient colours on the dashboard sidenav',
    subTitle: '',
    dueDate: 'Aug 8',
    images: 'aa' 
  },
  {
    title: 'Apply gradient colours on the dashboard sidenav',
    subTitle: '',
    dueDate: 'Aug 8',
    images: 'aa' 
  },
  {
    title: 'Apply gradient colours on the dashboard sidenav',
    subTitle: '',
    dueDate: 'Aug 8',
    images: 'aa' 
  },
  {
    title: 'Apply gradient colours on the dashboard sidenav',
    subTitle: '',
    dueDate: 'Aug 8',
    images: 'aa' 
  },
  {
    title: 'Apply gradient colours on the dashboard sidenav',
    subTitle: '',
    dueDate: 'Aug 8',
    images: 'aa' 
  },
  {
    title: 'Apply gradient colours on the dashboard sidenav',
    subTitle: '',
    dueDate: 'Aug 8',
    images: 'aa' 
  },
  {
    title: 'Apply gradient colours on the dashboard sidenav',
    subTitle: '',
    dueDate: 'Aug 8',
    images: 'aa' 
  }
]

useEffect(() => {
  dispatch(modules(modulesData))
}, [])

  return (
    <div className='modules-wrapper w-100'>
        <ul className='pl-0'>
{meee.map(({title, subTitle, dueDate, images}, i) => (
  <li key={i}>
  <Card className='w-100 mb-3'>
  <Card.Body>
    <div className='d-flex justify-content-between'>
      <div>
        <Card.Text className='mb-0'>{title}</Card.Text>
        <Card.Text>{subTitle}</Card.Text>
      </div>
      <Card.Text>...</Card.Text>
    </div>

    <div className='d-flex justfy-content-between'>
      <div>
        <Card.Text>
          <img src={clock} alt='clock' className='mr-3'/>
          Due {dueDate}
        </Card.Text>
      </div>
      <Card.Text>...</Card.Text>
    </div>

  </Card.Body>
</Card>
  </li>

))}
         
          </ul>
    </div>
  )
}


export default Modules;