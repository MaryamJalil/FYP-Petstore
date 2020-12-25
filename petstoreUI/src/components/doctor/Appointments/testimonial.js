import React, { Component } from 'react';
import DatePicker from "react-datepicker";
 import Form from 'react-bootstrap/Form';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col'
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlinePlus} from "react-icons/ai";

export default class Testimonial extends Component {
    render() {
        return (
            <div>
                <div style={{marginTop:'30px'}}>
          <Card style={{marginLeft:'55px' ,marginBottom:'10px' ,backgroundColor:"#b8f2e6"}} border="secondary">
          <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"> <AiOutlinePlus/>To leave a testimonial, please fill out this form.
</Navbar.Brand>
      </Navbar>
         
          <div >
          <Form style={{padding:'55px'}}>
          <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label> Your Name</Form.Label>
          <Form.Control type="name" placeholder="Enter your Name" />

        
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Pets Name</Form.Label>
          <Form.Control type="Age" placeholder="Enter your Pet Name" />
         
        </Form.Group>
      </Form.Row>
              
    
      <br/>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="name" placeholder="Enter your email" />

        
        </Form.Group>
    
    
      </Form.Row>
      <br/>
      <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Upload your Pets Photo" />
  </Form.Group>
      <br/>

    
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Testimonial *
</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <br/>
    
      <Button  variant="dark" type="submit">
Submit      </Button>
     
    </Form>
    </div>
    </Card>
    </div>

         
         
 

   
            </div>
        )
    }
}
