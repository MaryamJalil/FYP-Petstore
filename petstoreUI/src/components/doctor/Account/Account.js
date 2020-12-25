import React, { Component } from 'react';
 import Form from 'react-bootstrap/Form';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col'
import "react-datepicker/dist/react-datepicker.css";

import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlinePlus} from "react-icons/ai";
import axios from 'axios';
import { BackendInstance } from '../../../config/config';
import { FaObjectGroup } from 'react-icons/fa';

// import {API} from "../../../config"




export default class Account extends Component {
  constructor(props) {
    super(props);
    this.handleChangeName  = this.handleChangeName.bind(this);
    this.handleChangeCountry  = this.handleChangeCountry.bind(this);
    this.handleChangeCity  = this.handleChangeCity.bind(this);
    this.handleChangeLocation  = this.handleChangeLocation.bind(this);
    this.handleChangeAddress  = this.handleChangeAddress.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      Name: '',
      Country: '',
      City:'',
      Location:'',
      Address:''
  

    }
  }
  handleChangeName  (e) {
    this.setState({
      Name: e.target.value,

    });
  }
  handleChangeCountry (e) {
    this.setState({
      Country: e.target.value,
  
    });
  }
  handleChangeCity (e) {
    this.setState({

      City: e.target.value,

    });
  }
  handleChangeLocation (e) {
    this.setState({
      Location: e.target.value

    });
  }
  handleChangeAddress (e) {
    this.setState({
      Address: e.target.value
    });
  }
  onSubmit=  async(e) =>{
    e.preventDefault();
    const obj = {
      Name: this.state.Name,
      Country: this.state.Country,
      City: this.state.City,
     Location: this.state.Location,
      Address: this.state.Address

    };
    const obj1={
      hospitalName: this.state.Name,
      doctor: this.state.Country,
      date: '2020-08-28T13:48:46.572+00:00'
    }
    console.log(obj);

  const form= await axios.post('http://localhost:5000/api/hospital/create/5f5a42d03a43ce1f2480733d', obj1)
    .then(res => console.log(res.data)).catch((err) => {
      console.log(e);
    });;
  
    this.setState({
      Name: '',
      Country: '',
      City: '',
      Location:'',
      Address:''
    })
  }
 
      render() {
        
        return (
    
            <div className="container"> 
          
              

  

    <div style={{marginTop:'40px'}}  >
        <Card style={{marginLeft:'55px' ,marginBottom:'10px' ,backgroundColor:"#9bf6ff"}} border="secondary">
          <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"> <AiOutlinePlus/>Edit Hospital Details</Navbar.Brand>
      </Navbar>
             
          <div >
          <Form style={{padding:'55px'}} onSubmit={this.onSubmit}>
          <Form.Row>
        <Form.Group as={Col} >
          <Form.Label>Name</Form.Label>
          <input type="name" placeholder="Enter your Name"   value={this.state.Name}
                      onChange={this.handleChangeName} />

        
        </Form.Group>
    
        <Form.Group as={Col} >
          <Form.Label>Country</Form.Label>
          <input type="Age" placeholder="Enter Country" value={this.state.Country}
                      onChange={this.handleChangeCountry} />
         
        </Form.Group>
      </Form.Row>
              
    
      <br/>
      <Form.Row>
        <Form.Group as={Col} >
          <Form.Label>City</Form.Label>
          <input type="name" placeholder="Enter City"  value={this.state.City}
                      onChange={this.handleChangeCity}/>

        
        </Form.Group>
    
        <Form.Group as={Col} >
          <Form.Label>Location</Form.Label>
          <input type="Age" placeholder="Enter Location" value={this.state.Location}
                      onChange={this.handleChangeLocation} />
         
        </Form.Group>
      </Form.Row>
      <br/>
    
      <Form.Group >
        <Form.Label>Address</Form.Label>
        <input as="textarea" rows="3" value={this.state.Address}
                      onChange={this.handleChangeAddress} />
      </Form.Group>
      <br/>

     
      <br/>
    
      <Button  variant="dark" type="submit">
       Add Information
      </Button>
     
    </Form>
    </div>
    </Card>
    </div>

    </div>
        )
    }
}
