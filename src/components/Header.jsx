import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
function Header() {
  return (
    <div className='m-2'> <MDBNavbar light className='nav-bg display-stay sticky-top navbar-expand-lg'>
    <MDBContainer fluid >
      <MDBNavbarBrand href='#' className='text-white'>
      <img src="https://bonfirestories.ca/wp-content/uploads/2017/03/Employees.gif" width={'80px'} alt="" />
     <h2 >EMS</h2>
    
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header