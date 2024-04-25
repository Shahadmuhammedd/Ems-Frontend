import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function View() {
  return (
    <div>
       <h2 className='text-center m-3'>View Employee Details</h2>
      <Row>
        <Col>
        <Card style={{ width: '40rem',}} className='m-5'>
      <ListGroup variant="flush" style={{background:'#E1F2F7'}}>
        <h2 className='text text-center m-2 p-2'>Employee Card</h2>
        <ListGroup.Item>Employee Id : 112233</ListGroup.Item>
        <ListGroup.Item>Full Name : Arun</ListGroup.Item>
        <ListGroup.Item>Age : 34</ListGroup.Item>
        <ListGroup.Item>Designation : Web developer</ListGroup.Item>
        <ListGroup.Item>Salary : 50000</ListGroup.Item>
      </ListGroup>
    </Card>
    
    </Col>
    <Col>
    <img src="https://www.pinclipart.com/picdir/big/60-607394_benefits-of-an-employee-handbook-employee-clipart-png.png" width={'400px'} height={'400px'} alt="" />
    </Col>
    


      </Row>
    </div>
  )
}

export default View