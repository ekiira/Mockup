import React from "react";

import { Card, Form } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { tMark } from '../../actions'

import sear from '../../assets/icons/search.svg'

const CustomMenu = () => {
  const dispatch = useDispatch();

  const dropdownChange = (e) => {
    const value = e.target.value;
    dispatch(tMark(value))
  }
  return (
    <Card className='db'>
      <Form.Control type="text" placeholder="Search" />
      <ul className='list-group list-group-flush'>
        <li className='list-group-item p-0'>
          <button className='button w-100 h-100 text-left' value='Pass' onClick={dropdownChange}>
            Pass
          </button>
        </li>
        <li className='list-group-item p-0'>
          <button className='button w-100 h-100 text-left' value='Failed' onClick={dropdownChange}>
            Failed
          </button>
        </li>
        <li className='list-group-item p-0'>
          <button className='button w-100 h-100 text-left' value='Retest' onClick={dropdownChange}>
            Retest
          </button>
        </li>        
        <li className='list-group-item p-0'>
          <button className='button w-100 h-100 text-left' value='Untest' onClick={dropdownChange}>
            Untest
          </button>
        </li>
      </ul>`
    </Card>
  )
}

export default CustomMenu;
