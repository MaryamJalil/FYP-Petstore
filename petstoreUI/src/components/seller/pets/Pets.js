import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Carousel from 'react-bootstrap/Carousel';
import cat1 from './img/cat1.jpg';
import cat2 from './img/cat2.jpg';
import cat3 from './img/cat3.jpg';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {AiFillPhone} from 'react-icons/ai';
import Form from 'react-bootstrap/Form';


export default class Pets extends Component {
  render() {
    return (
      <div className="container">
         <div style={{marginLeft:"45px",marginTop:"30px"}}>
            <Breadcrumb>
  <Breadcrumb.Item href="/seller/addpets">Add Pets</Breadcrumb.Item>
  <Breadcrumb.Item href="/seller/petpic">
    Pets
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/seller/savepets">Save </Breadcrumb.Item>
</Breadcrumb>
</div>


<div style={{marginLeft:"45px" ,marginTop:"100"}}>
<Row>
 <Col>

<Carousel  >
  <Carousel.Item >
    <img
      src={cat1}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item >
    <img

      src={cat2}
      alt="Third slide"
    />

  </Carousel.Item>
  <Carousel.Item >
    <img
      // className="d-block w-70"
      src={cat3}
      alt="Third slide"
    />

  </Carousel.Item>
  
</Carousel>
</Col>
<Col>
<Card style={{ width: '18rem' , marginLeft:'200px',backgroundColor:"#ffd6a5"}}>

 
  <Card.Body>
    <Card.Title> Starting Price: $45</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
    Persian kittens 

    </Card.Text>
    <Card.Text>

    6 weeks & 3 months old Indoor kittens for adoption

Litter trained
</Card.Text>


  </Card.Body>

</Card>

<Card style={{ width: '18rem' ,  marginLeft:'200px',marginTop:'30px' ,backgroundColor:"#ffd6a5"}}>

 
  <Card.Body>
    <Card.Title>Seller Description</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Seller Name: J J Khan</Card.Subtitle>
    <Button variant="dark">Chat with seller</Button>
    {/* <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text> */}
    <br/>
    <Card.Link href="#"><AiFillPhone size={25}/>Phone</Card.Link>
  </Card.Body>

</Card>
</Col>


</Row>
<Row>
<Card style={{ width: '18rem' ,  marginLeft:'45px',marginTop:'30px', marginBottom:"10px" ,backgroundColor:"#ffadad"}}>

 
  <Card.Body>
    
        <br/>
    <Form.Group controlId="formBasicEmail" style={{marginTop:'10px'}}>
    <Form.Label>Email Bid Price</Form.Label>
    <Form.Control type="Bid" placeholder="Enter Bid Price" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <br/>
  <Button variant="dark">Place Bid</Button>

  </Card.Body>

</Card>

<Card style={{ width: '15rem' ,height:'13rem',  marginLeft:'45px',marginTop:'30px',marginBottom:"10px",backgroundColor:"#ffadad" }}>

 
  <Card.Body>
 
        <br/>
    <Form.Group controlId="formBasicEmail" style={{marginTop:'10px'}}>
    <Form.Label>Highest Bid</Form.Label>
   
  </Form.Group>
  <br/>
  <Button variant="dark">$50</Button>

  </Card.Body>

</Card>
</Row>

</div>
     </div>
    )
  }
}
