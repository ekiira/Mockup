import React, { useEffect } from 'react';

// React Bootstrap
import { Card, Button, Dropdown } from 'react-bootstrap';

import './TestCases.css'

import { useDispatch, useSelector } from 'react-redux'
import { tCases } from '../../actions'

import DropDown from './Dropdown';


const TestCases = ( ) => {
  const dispatch = useDispatch()
  const cases = useSelector(state => state.testCases.testCases);
  const mark = useSelector(state => state.testmark.testmark)

  const testCases = [
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' },
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' },
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' },
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' },
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' },
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' },
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' },
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' },
    { text: 'Make the background image blur' },
    { text: 'Apply gradient colours on the navigation' }    
  ]

  useEffect(() => {
    dispatch(tCases(testCases))
  }, [])

  return (
<div className='h-100'>
<h4> Added Test Case</h4>
<Card className='test-cases-wrapper'>
<ul className='list-group list-group-flush'>
  {cases.map(({text}, i) => (
    <li className='list-group-item' key={i} >
      <div className='row py-2' >
        <div className='col-8'>
          {text}
        </div>

        <div className='col-4 text-center'>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {mark}
            </Dropdown.Toggle>
            <Dropdown.Menu className='px-2 db-menu'>
              <DropDown/>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </li>
  ))}
</ul>

<div className='row py-3'>
    <div className='col-6'>
    <div className='text-center'>
    <Button variant="none" className='text-center'>New Test Case</Button>
    
    </div>
    </div>
    <div className='col-6'>
    <div className='text-center'>
    <Button variant="none"  className='text-center'>Test</Button>
    
    </div>
    </div>
</div>
</Card>

</div>
      )
}

export default TestCases;