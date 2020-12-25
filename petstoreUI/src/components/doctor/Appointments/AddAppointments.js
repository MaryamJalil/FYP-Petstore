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

class AddAppointments extends Component {
  state = {
    startDate: new Date(),
    hospitalName: "",
    doctor: "",
    date: ""
  };
 
  /*handleChange = date => {
    this.setState({
      startDate: date
    });
  };*/
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(" login e value", e.target.value);
  };
  state = {
    time: '10:00',
  }
 
  onChange = time => this.setState({ time })

  render() {
    return (
      <div style={{marginTop:'40px'}}>
      <Card style={{marginLeft:'55px' ,marginBottom:'10px',backgroundColor:"#b8f2e6"}} border="secondary">
      <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">Add Appointment</Navbar.Brand>
  </Navbar>
     
      <div >
      <Form style={{padding:'100px'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Pet Name</Form.Label>
    <Form.Control type="name" placeholder="Enter Pet's Name" />
    
  </Form.Group>
<br/>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Pet Owner</Form.Label>
    <Form.Control type="owner" placeholder="Owner's Name" />
  </Form.Group>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <br/>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Date</Form.Label>
      {/* <Form.Control type="email" placeholder="mm/dd/yyyy" /> */}

      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholder="mm/dd/yyyy"
      />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Time</Form.Label>
      {/* <Form.Control type="password" placeholder="Password" /> */}
      <TimePicker
          onChange={this.onChange}
          value={this.state.time}
        />
    </Form.Group>
  </Form.Row>
  <br/>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Appointment Notes</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
  <br/>

  <Button variant="dark" type="submit">
   Add Appointment
  </Button>
 
</Form>
</div>
</Card>
</div>


    );
  }
}

export default AddAppointments;
