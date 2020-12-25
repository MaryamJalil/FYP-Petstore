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
import oreo from '../img/oreo.png';
import siamese from '../img/siamese.jfif';
import german from '../img/german.jfif';
import labrador from '../img/labrador.jfif';



export default class AdminViewPets extends Component {
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
      <option>Sort By Location</option>
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
          <Card.Header>Dog Breed</Card.Header>

  <ListGroup variant="flush">
 
      <ListGroup.Item>

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

        </ListGroup.Item>
        
        


  </ListGroup>
 
</Card>
<div style={{marginTop:"30px"}}>
    
<Card style={{ width: '18rem' }}>
          <Card.Header>Cat Breed</Card.Header>

  <ListGroup variant="flush">
 
      <ListGroup.Item>

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

        </ListGroup.Item>
        
        


  </ListGroup>
 
</Card>

</div>

<div style={{marginTop:"30px"}}>
    
<Card style={{ width: '18rem' }}>
          <Card.Header>Location</Card.Header>

  <ListGroup variant="flush">
 
      <ListGroup.Item>

      <Form.Check
          type="radio"
          label="Islamabad"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Rawalpindi"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Lahore"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Karachi "
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        /> <Form.Check
        type="radio"
        label="Peshawar"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      /> <Form.Check
      type="radio"
      label="Sialkot"
      name="formHorizontalRadios"
      id="formHorizontalRadios2"
    /> 

        </ListGroup.Item>
        
        


  </ListGroup>
 
</Card>

</div>
</Col>


   
<Col>
<CardDeck style={{ width: '45rem' }}>
  <Card style={{ width: '45rem' }}>
    <Card.Img variant="top" src={oreo}
    style={{width:"90",height:"20rem"}}/>
    <Card.Body>
        <Card.Text>
      <Row>
        <Col>
      <Card.Text style={{fontWeight:"bold"}}>Breed</Card.Text>
      </Col>
      <Col>
      <Card.Text style={{marginRight:"5px"}}>Persian</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      
      <Card.Text style={{fontWeight:"bold"}}>Age</Card.Text>
      </Col>
      <Card.Text  style={{marginLeft:"50px"}}> 1 year</Card.Text>

      <Col>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text  style={{fontWeight:"bold"}}>Location</Card.Text>
      </Col>
      <Col>
      <Card.Text  >Islamabad</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text  style={{fontWeight:"bold"}}>Address</Card.Text>
      </Col>
      <Col>
      <Card.Text  >12 M Square G 8 Markaz, Islamabad</Card.Text>

      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text  style={{fontWeight:"bold"}}>Mobile</Card.Text>
      </Col>
      <Col>
      <Card.Text >0343 8530005</Card.Text>
      </Col>
      <br/>
      <Row>
      <Col>
      <Button  variant="dark" style={{marginLeft:"15px"}}>Bid</Button>{' '}
      </Col>
      </Row>
      </Row>

    </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$25</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '45rem' }}>
    <Card.Img variant="top" src={siamese}
    style={{width:"90",height:"20rem"}} />
    <Card.Body>
        <Card.Text>
      <Row>
        <Col>
      <Card.Text  style={{fontWeight:"bold"}}>Breed</Card.Text>
      </Col>
      <Col>
      <Card.Text  style={{marginRight:"5px"}}>Siamese</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      
      <Card.Text  style={{fontWeight:"bold"}}>Age</Card.Text>
      </Col>
      <Card.Text  style={{marginLeft:"50px"}}> 1 year</Card.Text>

      <Col>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text  style={{fontWeight:"bold"}}>Location</Card.Text>
      </Col>
      <Col>
      <Card.Text  >Islamabad</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text  style={{fontWeight:"bold"}}>Address</Card.Text>
      </Col>
      <Col>
      <Card.Text  >12 M Square G 8 Markaz, Islamabad</Card.Text>

      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text  style={{fontWeight:"bold"}}>Mobile</Card.Text>
      </Col>
      <Col>
      <Card.Text >0343 8534445</Card.Text>
      </Col>
      <br/>
      <Row>
      <Col>
      <Button  variant="dark" style={{marginLeft:"15px"}}>Bid</Button>{' '}
      </Col>
      </Row>
      </Row>

    </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$30</small>
    </Card.Footer>
  </Card>
  
</CardDeck>




<div style={{marginTop:"20px"}}>
<CardDeck style={{ width: '45rem' }}>
  <Card style={{ width: '45rem' }}>
    <Card.Img variant="top" src={german}
      style={{width:"90",height:"20rem"}}/>
     <Card.Body>
        <Card.Text>
      <Row>
        <Col>
     <Card.Text style={{fontWeight:"bold"}}>Breed</Card.Text>
      </Col>
      <Col>
     <Card.Text style={{marginRight:"5px"}}>German Shephard</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      
      <Card.Text style={{fontWeight:"bold"}}>Age</Card.Text>
      </Col>
      <Card.Text style={{marginLeft:"50px"}}> 1 year</Card.Text>

      <Col>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text style={{fontWeight:"bold"}}>Location</Card.Text>
      </Col>
      <Col>
      <Card.Text >Islamabad</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text style={{fontWeight:"bold"}}>Address</Card.Text>
      </Col>
      <Col>
      <Card.Text >12 M Square G 8 Markaz, Islamabad</Card.Text>

      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
     <Card.Text style={{fontWeight:"bold"}}>Mobile</Card.Text>
      </Col>
      <Col>
     <Card.Text>0343 8530005</Card.Text>
      </Col>
      <br/>
      <Row>
      <Col>
      <Button  variant="dark" style={{marginLeft:"15px"}}>Bid</Button>{' '}
      </Col>
      </Row>
      </Row>

    </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$25</small>
    </Card.Footer>
  </Card>
  <Card style={{ width: '45rem' }}>
    <Card.Img variant="top" src={labrador}
      style={{width:"90",height:"20rem"}} />
     <Card.Body>
        <Card.Text>
      <Row>
        <Col>
     <Card.Text style={{fontWeight:"bold"}}>Breed</Card.Text>
      </Col>
      <Col>
     <Card.Text style={{marginRight:"5px"}}>labrador</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      
     <Card.Text style={{fontWeight:"bold"}}>Age</Card.Text>
      </Col>
     <Card.Text style={{marginLeft:"50px"}}> 2 year</Card.Text>

      <Col>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
     <Card.Text style={{fontWeight:"bold"}}>Location</Card.Text>
      </Col>
      <Col>
     <Card.Text >Islamabad</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
     <Card.Text style={{fontWeight:"bold"}}>Address</Card.Text>
      </Col>
      <Col>
     <Card.Text >12 M Square G 8 Markaz, Islamabad</Card.Text>

      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
     <Card.Text style={{fontWeight:"bold"}}>Mobile</Card.Text>
      </Col>
      <Col>
     <Card.Text>0343 8530005</Card.Text>
      </Col>
      <br/>
      <Row>
      <Col>
      <Button  variant="dark" style={{marginLeft:"15px"}}>Bid</Button>{' '}
      </Col>
      </Row>
      </Row>

    </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">$40</small>
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
