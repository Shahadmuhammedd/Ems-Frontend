import React from 'react'
import { MDBInput } from 'mdb-react-ui-kit';

function Add() {
  return (
    <div className='p-2'>
      <h2 className='text-center m-3'>Add Employee Details</h2>
      <div className='m-5 p-5 card'  style={{background:'#E1F2F7'}}>
     <div className='m-2'> <MDBInput className='' label='ID' id='form1' type='text' /></div>
     <div className='m-2'> <MDBInput className='' label='Name' id='form1' type='text' /></div>
     <div className='m-2'> <MDBInput className='' label='Age' id='form1' type='text' /></div>
     <div className='m-2'> <MDBInput className='' label='Designation' id='form1' type='text' /></div>
     <div className='m-2'> <MDBInput className='' label='Salary' id='form1' type='text' /></div>
     <div > <button  className='btn btn-outline-primary btn-sm d-block mx-auto my-3 '>Add</button></div>
    
     
      </div>
     



    </div>
  )
}

export default Add