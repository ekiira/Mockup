import React from "react";
import { Card, Form } from 'react-bootstrap'
import sear from '../../assets/icons/search.svg'

const CustomMenu = () => {
  return (
    <Card className='db'>
      <Form.Control type="text" placeholder="Search" />
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          Pass
        </li>
        <li className='list-group-item'>
          Failed
        </li>
        <li className='list-group-item'>
          Retest
        </li>        
        <li className='list-group-item'>
          Untest
        </li>
      </ul>`
    </Card>
  )
}

export default CustomMenu
