import React, { Component } from "react";
import { DatePicker } from "@material-ui/pickers";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {BsFillPlusCircleFill} from "react-icons/bs";
import StaticDatePicker from './StaticDatePicker';
import DateFnsUtils from "@date-io/date-fns";
import { render } from "react-dom";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";


export default class DoctorNotifications extends Component {
   
      
    render() {

        return (
            <div className="container" >
                <div style={{marginLeft:"45px",marginTop:"30px"}}>
                    <Card style={{backgroundColor:"#64dfdf"}} >
                    <Card.Header>Pets Appointment</Card.Header>


                <Form  style={{padding:"30px"}}>
                 
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
     Appointment
    </Form.Label>
    <Col >
      {/* <Form.Control type="email" placeholder="Email" /> */}
      <Button><BsFillPlusCircleFill style={{marginRight:"10px"}}/> Booked</Button>
      </Col>
      <Col>
      
      <Button><BsFillPlusCircleFill style={{marginRight:"10px"}}/> Cancelled</Button>

    </Col>
  </Form.Group>
  <br/>

  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
     Appointment Reminders
    </Form.Label>
    <Col >
      {/* <Form.Control type="password" placeholder="Password" /> */}
      <Form.Label>How would you like to notify pet owners of appointments</Form.Label>
      <Col>
      {/* <Form.Label>Email</Form.Label>  */}
      <Form.Check 
    type="switch"
    id="custom-switch"
    label="Email"
  />
  
      {/* <Form.Label>Text</Form.Label> */}
      <Form.Check 
    type="switch"
    // id="custom-switch"
    label="Chat"
  />
      </Col>


    </Col>
  </Form.Group>

  <br/>
  <Form.Group as={Row} controlId="formHorizontalPassword">
    <Form.Label column sm={2}>
     Reminder Lead Time
    </Form.Label>
    <Col >
      {/* <Form.Control type="password" placeholder="Password" /> */}
      <Form.Label>Send Reminder to pet owner </Form.Label>
      <Col>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <StaticDatePicker />
  </MuiPickersUtilsProvider>
  
      </Col>


    </Col>
  </Form.Group>


  <Form.Group >
    <Col >
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
 
</Form>


</Card>

                </div>
                
            </div>
        )
    }
}
