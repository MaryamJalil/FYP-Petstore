import React, { Component } from 'react';
import DatePicker from "react-datepicker";
 import Form from 'react-bootstrap/Form';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col'
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import Row from "react-bootstrap/Row"

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';

class makeportfolio extends Component {
 

  render() {
    return (
      <div className="container">
      <div style={{marginTop:'40px'}}>
      <Card style={{marginLeft:'100px' ,marginBottom:'10px',width:"50rem"}} border="secondary">
      <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">Make Pet Portfolio</Navbar.Brand>
  </Navbar>
     
      <div >
      <Form style={{padding:'30px'}}>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridname">
      <Form.Label>Pet Name</Form.Label>
      <Form.Control type="name" placeholder="Enter name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Age</Form.Label>
      <Form.Control type="Age" placeholder="Age" />
    </Form.Group>
  </Form.Row>
  <br/>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Pet Category</Form.Label>
      <Form.Control as="select" defaultValue="Pet Category">
        <option>Cat</option>
        <option>Dog</option>

      </Form.Control>
    </Form.Group>


    <Form.Group as={Col} controlId="formGridAge">
      <Form.Label>Breed</Form.Label>
      <Form.Control type="Breed" placeholder="Breed" />
    </Form.Group>
  </Form.Row>
<br/>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Describe your Pet's Nature</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <br/>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Your pet's Image" />
  </Form.Group>
  <br/>

  <Button variant="dark" type="submit">
  Submit
  </Button>
 
</Form>
</div>
</Card>
</div>
</div>


    );
  }
}

export default makeportfolio;
