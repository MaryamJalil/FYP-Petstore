import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';


import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import {IoMdContacts} from"react-icons/io"



export default class AdminNotifications extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"30px"}} >
                                    <Row>
                                      
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
    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Seller</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body style={{marginLeft:"30px"}}><IoMdContacts size={25}/>New User Request</Toast.Body>
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

    <Toast>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Doctor</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.Body style={{marginLeft:"30px"}}><IoMdContacts size={25}/>New User Request</Toast.Body>
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
    
    
    

 
    <Toast>
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
