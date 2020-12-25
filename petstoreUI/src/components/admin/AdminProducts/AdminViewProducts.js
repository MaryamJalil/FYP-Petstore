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

export default class AdminViewProducts extends Component {
  render() {
    return (
      <div>
     
        <div className="container">
          <Row>
            <Col>
        <Card body  style={{marginTop:"30px" ,marginLeft:"40px", width: '18rem'}}>

        <Button variant="dark">filter</Button>{' '}
     
          Clear All</Card>

          </Col>
          <Col>
          <Card body  style={{marginTop:"30px" ,marginLeft:"40px", width: '30rem'}}>
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
          <Card style={{ width: '18rem' }}>
          <Card.Header>Categories</Card.Header>

  <ListGroup variant="flush">
 
      <ListGroup.Item>

        <Form.Check
          type="radio"
          label="Cat"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        </ListGroup.Item>
        <ListGroup.Item>
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
   
          <Card style={{ width: '18rem' }}>
          <Card.Header>Featured Brands</Card.Header>

  <ListGroup variant="flush">
 
      <ListGroup.Item>

        <Form.Check
          type="radio"
          label=" Rocco & Roxie Supply Co."
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        </ListGroup.Item>
        <ListGroup.Item>
        <Form.Check
          type="radio"
          label=" Milk-Bone or Rocco & Roxie Supply Co."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item>
        <ListGroup.Item>
        <Form.Check
          type="radio"
          label=" ChomChom ROLLER"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item> <ListGroup.Item>
        <Form.Check
          type="radio"
          label=" Wellness Natural Pet Food"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item> <ListGroup.Item>
        <Form.Check
          type="radio"
          label=" Greenies"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item> <ListGroup.Item>
        <Form.Check
          type="radio"
          label=" Veterinary Formula Clinical Care"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item> 
        <ListGroup.Item>
        <Form.Check
          type="radio"
          label=" Milk-Bone or Rocco & Roxie Supply Co."
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item>
        <ListGroup.Item>
        <Form.Check
          type="radio"
          label=" PetSafe"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item>
        <ListGroup.Item>
        <Form.Check
          type="radio"
          label=" FreshStep"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        </ListGroup.Item>
        
        


  </ListGroup>
 
</Card>
</Col>
<Col>
<CardDeck style={{ width: '45rem' }}>
  <Card style={{ width: '45rem' }}>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/61SbGCcFscL._AC_SY450_.jpg" 
    style={{width:"90",height:"20rem"}}/>
    <Card.Body>
      <Card.Title>Best Friends by Sheri The Original Calming Shag Vegan Fur Donut Cuddler (Multiple Sizes)</Card.Title>
      <Card.Text>
      4.5
(13124)
With ultra-soft and cushioned walls all the way around, your dog or cat is sure to feel
 loved and comforted 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$25</small>
      <Button variant="success" style={{marginLeft:"100px"}}>Add To Cart</Button>{' '}

    </Card.Footer>
  </Card>
  <Card style={{ width: '45rem' }}>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81fMEzQjaYL._AC_SX466_.jpg"
    style={{width:"90",height:"20rem"}} />
    <Card.Body>
      <Card.Title>V-dog Vegan Dog Treats with Superfoods</Card.Title>
      <Card.Text>
      No more stinky dog breath! V-dog breathbones not work to only improve dental health, they give your pup fresh, cinnamon-y breath. 
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
  <Card style={{ width: '45rem' }}>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/71ix8a5US%2BL._AC_SY879_.jpg" 
      style={{width:"90",height:"20rem"}}/>
    <Card.Body>
      <Card.Title>AmazonBasics Cat Tree Tower With Perch Condo - 12 x 12 x 20 Inches, Dark Brown</Card.Title>
      <Card.Text>
      One-story cat tree with scratching posts and enclosure
Multiple interactive elements allow your cat to relax, play, and climb
Helps keep your cat from damaging carpets, furniture, curtains, and more
Natural jute fiber scratching posts help keep nails healthy
Neutral color tones fit in with your home’s existing décor
Durable, long-lasting construction
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$25</small>
      <Button variant="success" style={{marginLeft:"100px"}}>Add To Cart</Button>{' '}

    </Card.Footer>
  </Card>
  <Card style={{ width: '45rem' }}>
    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/G/01/img20/pets/Nav/12CatFlea"
      style={{width:"90",height:"20rem"}} />
    <Card.Body>
      <Card.Title>Vet's Best Advanced Strength Flea + Tick Cat Shampoo</Card.Title>
      <Card.Text>
      JUST FOR CATS: Vet’s Best Flea and Tick Shampoo for Cats is a strong yet gentle flea treatment formulated for cats that kills fleas, flea larvae and ticks on contact without harsh chemicals.
CERTIFED NATURAL OILS: Made with 100% certified natural oils with a unique blend of soothing clove and cottonseed essential oils.

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
