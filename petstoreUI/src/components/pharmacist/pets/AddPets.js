import React, { Component } from 'react';
 import Form from 'react-bootstrap/Form';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col';
 import Row from 'react-bootstrap/Row';
import "react-datepicker/dist/react-datepicker.css";

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlinePlus} from "react-icons/ai";
import Breadcrumb from 'react-bootstrap/Breadcrumb'




export default class AddPets extends Component {

      render() {
        return (
            <div>
                <div style={{marginLeft:"45px"}}>
            <Breadcrumb>
  <Breadcrumb.Item href="/addpets">Add Pets</Breadcrumb.Item>
  <Breadcrumb.Item href="/petpic">
   Pets
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/savepets">Save </Breadcrumb.Item>
</Breadcrumb>
</div>
          <div style={{marginTop:'30px'}}>
          <Card style={{marginLeft:'55px' ,marginBottom:'10px'}} border="secondary">
          <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home"> <AiOutlinePlus/>Add Pets</Navbar.Brand>
      </Navbar>
         
          <div >
          <Form style={{padding:'55px'}}>
          <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="name" 
          // placeholder="Enter product Name" 
          />

        
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Enter Starting Price</Form.Label>
          <Form.Control type="quantity" 
          // placeholder="Enter quantity"
           />
         
        </Form.Group>
      </Form.Row>
              
    
      <br/>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Enter Description</Form.Label>
          <Form.Control type="name" 
          // placeholder="Enter company's Name" 
          />

        
        </Form.Group>
    
    
      </Form.Row>
      <br/>
    
      <Form.Row>
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Pet Category</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Cat</option>
        <option>Dog</option>
      </Form.Control>
    </Form.Group>
    
    <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Seller Name</Form.Label>
          <Form.Control type="quantity"
          //  placeholder="Enter Price" 
           />
         
        </Form.Group>
      </Form.Row>
      <br/>
      <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Cats Breed
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label="Abyssinian Cat"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="American Shorthair Cat"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Birman Cat Breed "
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Maine Coon Cat Breed "
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        /> <Form.Check
        type="radio"
        label="Persian Cat Breed"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      /> <Form.Check
      type="radio"
      label="Ragdoll Cat Breed"
      name="formHorizontalRadios"
      id="formHorizontalRadios2"
    /> <Form.Check
    type="radio"
    label="Siamese Cat Breed"
    name="formHorizontalRadios"
    id="formHorizontalRadios2"
  /> <Form.Check
  type="radio"
  label="Oriental Cat Breed  "
  name="formHorizontalRadios"
  id="formHorizontalRadios2"
/>
<Form.Check
  type="radio"
  label="None "
  name="formHorizontalRadios"
  id="formHorizontalRadios2"
/>
      </Col>
    </Form.Group>
    <br/>
    {/* Dog BReed */}
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Dog Breed
      </Form.Label>
      <Col sm={10}>
        <Form.Check
          type="radio"
          label=" Labrador Retriever"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="German Shepherd"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Golden Retriever"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Beagle"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        /> <Form.Check
        type="radio"
        label="Bulldog"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      /> <Form.Check
      type="radio"
      label="Yorkshire Terrier"
      name="formHorizontalRadios"
      id="formHorizontalRadios2"
    /> <Form.Check
    type="radio"
    label="Boxer"
    name="formHorizontalRadios"
    id="formHorizontalRadios2"
  /> <Form.Check
  type="radio"
  label=" Poodle"
  name="formHorizontalRadios"
  id="formHorizontalRadios2"
/>
<Form.Check
  type="radio"
  label= "Rottweiler"
  name="formHorizontalRadios"
  id="formHorizontalRadios2"
/>
<Form.Check
  type="radio"
  label= "none"
  name="formHorizontalRadios"
  id="formHorizontalRadios2"
/>
      </Col>
    </Form.Group>
  
      <br/>
      <Form>
  <Form.Group>
    <Form.File id="exampleFormControlFile1" label="Add Pet Picture" />
  </Form.Group>
</Form>

     
      <br/>
    
      <Button  variant="dark" type="submit">
      Submit
      </Button>
     
    </Form>
    </div>
    </Card>
    </div>
    </div>
        )
    }
}
