import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

export default class Header extends Component {
  render() {
    return (
      <div>
  

  <Navbar  fixed="top"  bg="info" variant="light"  style={{height:"100px"}}>
    <Navbar.Brand href="#home">Pet Store</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      {/* <Nav.Link href="#features">Features</Nav.Link> */}
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Signup</Nav.Link>
      
      <Nav.Link href="/chat">Chat</Nav.Link>


    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      {/* <Button variant="outline-primary">Search</Button> */}
    </Form>
  </Navbar>
      </div>
    )
  }
}
