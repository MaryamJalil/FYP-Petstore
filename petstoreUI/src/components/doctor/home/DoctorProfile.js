import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import mike from '../img/mike.jpg';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import Table from 'react-bootstrap/Table';
import Form from "react-bootstrap/Form";
import {IoMdContacts} from"react-icons/io"

export default class DoctorProfile extends Component {
    render() {
        return (
          // <div  className="container-fluid" style={{backgroundColor:"#a0c4ff"}} >
          <div>
        
                                    <Row>
                                        <Col >

                <div style={{marginLeft:'45px' ,marginTop:"40px" }}>
                <Card style={{ width: '35rem',backgroundColor:"#5ca4a9" }}>
                   
  {/* <Card.Img variant="top" src={mike}  roundedCircle style={{ flexDirection:'row'}}/> */}

      <Image src={mike} roundedCircle style={{width:'150px', flexDirection:'row',marginBottom:'20px',marginLeft:'55px'}} />
    
  <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>Michael Crichton</Card.Title>
 

<div>
  <Table responsive="sm">
    
    <tbody>
      <tr>
        <td  style={{fontWeight:"bold"}}>Name</td>
        <td>Doctor Hassan</td>
      
      </tr>
      <tr>
        <td  style={{fontWeight:"bold"}}>Age</td>
        <td>30years</td>
   
      </tr>
      <tr>
        <td  style={{fontWeight:"bold"}}>Experience</td>
        <td>3 years</td>
 
      </tr>
      <tr>
        <td  style={{fontWeight:"bold"}}>Bio</td>
        <td> I care for the health of animals and work to protect public health.
     I diagnose, treat, and research medical conditions and diseases of pets</td>
 
      </tr>
     


    </tbody>
  </Table>
  
       
</div>

  
  <Card.Title style={{fontWeight:"bold",backgroundColor:"#5ca4a9"}}>Duties</Card.Title>
  <ListGroup className="list-group-flush" >
    <ListGroupItem style={{backgroundColor:"#5ca4a9"}}>Examine animals to assess their health and diagnose problems
</ListGroupItem>
    <ListGroupItem style={{backgroundColor:"#5ca4a9"}}>Treat and dress wounds
</ListGroupItem>
    <ListGroupItem style={{backgroundColor:"#5ca4a9"}}>Perform surgery on animals
</ListGroupItem>
<ListGroupItem style={{backgroundColor:"#5ca4a9"}}>Test for and vaccinate against diseases

</ListGroupItem>
<ListGroupItem style={{backgroundColor:"#5ca4a9"}}>Operate medical equipment, such as x-ray machines

</ListGroupItem>
  </ListGroup>
  </Card.Body>
  
</Card>
</div>
                </Col>
                <Col>
                <div
  aria-live="polite"
  aria-atomic="true"
  style={{
    position: 'relative',
    minHeight: '200px',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
    }}
  >
    <Toast style={{backgroundColor:"#fed18c" ,marginTop:"40px" }}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">User</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body style={{marginLeft:"30px"}}><IoMdContacts size={25}/>New Appointment Request</Toast.Body>
      <Toast.Body>
      <ListGroup variant="flush" style={{marginLeft:"30px"}}>

   <Form.Check
     type="radio"
     label="Accept"
     name="formHorizontalRadios"
     id="formHorizontalRadios1"
   />
   <br/>

   <Form.Check
     type="radio"
     label="Reject"
     name="formHorizontalRadios"
     id="formHorizontalRadios2"
   />
</ListGroup>
</Toast.Body>
    </Toast>

    <Toast style={{backgroundColor:"#fed18c"}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">User</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body style={{marginLeft:"30px"}}><IoMdContacts size={25}/>New Appointment Request</Toast.Body>
      <Toast.Body>
      <ListGroup variant="flush" style={{marginLeft:"30px"}}>

   <Form.Check
     type="radio"
     label="Accept"
     name="formHorizontalRadios"
     id="formHorizontalRadios1"
   />
   <br/>

   <Form.Check
     type="radio"
     label="Reject"
     name="formHorizontalRadios"
     id="formHorizontalRadios2"
   />
</ListGroup>
</Toast.Body>
    </Toast>
    
    
    

 
    <Toast style={{backgroundColor:"#fed18c"}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Pet Lost</strong>
        <small>2 weeks ago</small>
      </Toast.Header>
      <Toast.Body>Location: Chaklala Scheme 3 </Toast.Body>
      <Toast.Body>White persian cat is lost. She has brown eyes and she is 1 years old.

Phone:03329778286</Toast.Body>
    </Toast> 
  </div>
</div>
</Col>
</Row>
</div>
                
  
            
        )
    }
}
