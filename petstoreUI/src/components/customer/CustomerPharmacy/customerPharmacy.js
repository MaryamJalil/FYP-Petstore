import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

import FormControl from "react-bootstrap/FormControl";
import medi1 from '../img/medi1.jfif';


export default class CustomerPharmacy extends Component {
  render() {
    return (
      <div>
     
        <div className="container">
          <Row>
            <Col>
        <Card body  style={{marginTop:"30px" ,marginLeft:"40px", width: '18rem',backgroundColor:"#a0c4ff"}}>

        <Button variant="dark">filter</Button>{' '}
     
          Clear All</Card>

          </Col>
          <Col>
          <Card body  style={{marginTop:"30px" ,marginLeft:"40px", width: '30rem',backgroundColor:"#a0c4ff"}}>
          <Form>
         
  <Form.Group controlId="exampleForm.SelectCustom">
    {/* <Form.Label>Custom select</Form.Label> */}
    <Form.Control as="select" custom>
      <option>Sort By Price</option>
      <option>Sort By brand</option>
      <option>Sort By Rating</option>
      {/* <option>4</option>
      <option>5</option> */}
    </Form.Control>
  </Form.Group>
</Form>


       </Card>
       <div style={{marginTop:"20px",marginLeft:"27px"}}>
       <Col>
           <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
    </Col>
    </div> 
          </Col>
          
          </Row>
          <div style={{marginLeft:"40px"}}>
          <Card style={{ width: '18rem',backgroundColor:"#bdb2ff" }}>
          <Card.Header>Categories</Card.Header>

  <ListGroup variant="flush">
 
      <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>

        <Form.Check
          type="radio"
          label="Cat"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        </ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>
        <Form.Check
          type="radio"
          label="Dog"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item>


  </ListGroup>
</Card>
</div>

<div style={{marginLeft:"40px" ,marginTop:"30px"}}>
  <Row>
  
<Col>
   
          <Card style={{ width: '18rem' ,backgroundColor:"#bdb2ff" }}>
          <Card.Header>Featured Brands</Card.Header>

  <ListGroup variant="flush">
 
      <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>

        <Form.Check
          type="radio"
          label=" Zoo Med"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        </ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>
        <Form.Check
          type="radio"
          label=" Molly Mut"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item>
        <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>
        <Form.Check
          type="radio"
          label=" True Love Pet"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item> <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>
        <Form.Check
          type="radio"
          label="Kenic"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item> <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>
        <Form.Check
          type="radio"
          label=" Lifeline Pet Supplies"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item> <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>
        <Form.Check
          type="radio"
          label=" Veterinary Formula Clinical Care"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item> 
        <ListGroup.Item style={{backgroundColor:"#bdb2ff" }}>
        <Form.Check
          type="radio"
          label=" Resco"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item>
       
        

  </ListGroup>
 
</Card>
</Col>
<Col>
<CardDeck style={{ width: '45rem' }}>
  <Card style={{ width: '45rem',backgroundColor:"#9bf6ff" }}>
    <Card.Img variant="top" src={medi1}
    style={{width:"90",height:"20rem"}}/>
    <Card.Body>
      <Card.Title>Pet Relief Diabetes in Dogs
</Card.Title>
      <Card.Text>
      Some diabetic dog products look great, but don’t actually work, contain harsh chemical ingredients that aren’t safe,
       & have no warranty (for a reason). Order before we run out.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$25</small>
      <Button variant="success" style={{marginLeft:"100px"}}>Add To Cart</Button>{' '}

    </Card.Footer>
  </Card>
  <Card style={{ width: '45rem',backgroundColor:"#9bf6ff"  }}>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81GwlJiNAdL._AC_UL480_FMwebp_QL65_.jpg"
    style={{width:"90",height:"20rem"}} />
    <Card.Body>
    <Card.Title>HomeoPet Cough
</Card.Title>
      <Card.Text>
      Fast Acting Liquid
No Known Side Effects; Safe For Kittens, Puppies, Pregnant And Nursing Animals
Free of all chemicals; uses only the purest, naturally grown raw materials
Manufactured Under An Fad Registered Process
Clinically Used On Dogs, Cats, Birds, Rabbits, Hamsters, Ferrets And Pot-Bellied Pigs
Fast acting liquid
No known side effects; safe for kittens, puppies, pregnant and nursing animals
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$30</small>
      <Button variant="success" style={{marginLeft:"100px"}}>Add To Cart</Button>{' '}
    </Card.Footer>
  </Card>
  
</CardDeck>




<div style={{marginTop:"20px"}}>
<CardDeck style={{ width: '45rem' }}>
  <Card style={{ width: '45rem' ,backgroundColor:"#9bf6ff" }}>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/715FsnY2tyL._AC_SX679_.jpg" 
      style={{width:"90",height:"20rem"}}/>
    <Card.Body>
      <Card.Title>Vet's Best Seasonal Allergy Relief | Dog Allergy Supplement | Relief from Dry or Itchy Skin</Card.Title>
      <Card.Text>
      VET FORMULATED - Veterinarian formulated with a blend of premium plant-based ingredients, including nettle leaf, perilla 
      seed and Vitamin E.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$25</small>
      <Button variant="success" style={{marginLeft:"100px"}}>Add To Cart</Button>{' '}

    </Card.Footer>
  </Card>
  <Card style={{ width: '45rem' ,backgroundColor:"#9bf6ff" }}>
    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/815e2etjOTL._AC_UL480_FMwebp_QL65_.jpg"
      style={{width:"90",height:"20rem"}} />
    <Card.Body>
      <Card.Title>Proviable DC for Cats and Dogs, 80 Capsules
</Card.Title>
      <Card.Text>
      ONTAINS 7 STRAINS OF BENEFICIAL BACTERIA: A probiotic with multiple strains, each having different properties,
       has a potentially higher likelihood of colonization versus a single strain product
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$40</small>
      <Button variant="success" style={{marginLeft:"100px"}}>Add To Cart</Button>{' '}

    </Card.Footer>
  </Card>
 

</CardDeck>
</div>
</Col>

  </Row>
</div>


          </div>
       
      </div>
    )
  }
}
