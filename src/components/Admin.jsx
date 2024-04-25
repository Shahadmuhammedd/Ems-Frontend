import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'
import { Link } from 'react-router-dom'
function Admin() {
const baseUrl = 'http://localhost:8000'

const [employeeData,setEmployeeData] = useState([])

const fetchData = async ()=>{
  const response = await axios.get(`${baseUrl}/api/get-all-employee`)
  console.log(response.data.employees);
  setEmployeeData(response.data.employees)
  
}
console.log(employeeData);

useEffect(()=>{
  fetchData();
},[])







  return (
    <div>
      <h2 className='text-center m-3'>Employee Management System</h2>
  <Row>
    <Col>
    <div className=' m-3' >
      
      <h3 className='text-justify m-2  '>Effortlessly manage your global employeedata</h3>
      <p className='container text-justify m-2 ' style={{color:'darkblue'}}> Welcome to our Employee Management System! Our platform provides a comprehensive solution for businesses to efficiently manage their workforce. From tracking employee attendance and performance to streamlining payroll processing and leave management, we offer a range of tools to simplify HR tasks. With intuitive interfaces and robust features, our system empowers HR professionals and managers to effectively oversee their teams and optimize organizational productivity. Whether you're a small startup or a large enterprise, our Employee Management System is designed to scale with your business needs. Experience seamless HR operations and elevate your workforce management with us!.</p>
    </div>
    </Col>
    <Col className='p-3'>
    <img className='m-3' src="https://www.shrmpro.com/wp-content/uploads/2020/08/Employee-Management.png" width={'100%'} height={'500px'} alt="" />
    <button style={{alignItems:'start'}} className='btn btn-outline-primary  d-block mx-auto  '>Add</button>
    </Col>
    </Row>

    <div className='m-3' >
    <h3 className='text-justify m-2 text-center '>Manage Your Employees</h3>
    <Row className='p-3, m-3'>
  {
    employeeData.map((item)=>(
      <Col className='m-3'>
      <Card style={{ width: '18rem', backgroundColor:'black'}}>
        <ListGroup variant="flush" className='text-center'>
          <ListGroup.Item style={{color:'black', fontWeight:'bold'}}></ListGroup.Item>
          <ListGroup.Item style={{fontWeight:'bold' ,color:'#0B4141'}}></ListGroup.Item>
          <ListGroup.Item className='d-flex justify-content-evenly'>
            <Link to={`view/${item.id}`}>
            <button className="btn "><i className='fa-solid fa-eye text-primary'></i></button>
            </Link>
            <button className="btn "><i className='fa-solid fa-pen text-success'></i></button>
            <button className="btn "><i className='fa-solid fa-trash text-danger'></i></button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
    ))
  }
   
    </Row>
    </div>
    </div>
  )
}

export default Admin