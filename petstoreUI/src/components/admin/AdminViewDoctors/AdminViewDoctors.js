import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";

export default class AdminViewDoctors extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"30px"}}> 
                <Card className="bg-dark text-white" style={{marginTop:"30px", marginLeft:"30px"}}>
  <Card.Img src="https://media.gettyimages.com/photos/happy-family-taking-their-dog-to-the-vet-picture-id1162639214?s=2048x2048"
   alt="Card image"
   style={{height:"500px"}} />
  <Card.ImgOverlay>
  <Button variant="success" style={{marginTop:"250px",marginLeft:"640px",height:"5rem",marginBottom:"60px"}}>Schedule An Appointment</Button>{' '}

  </Card.ImgOverlay>
</Card>
<div  className="container" style={{marginTop:"30px",marginLeft:"20px"}}>
<Card body border="success">We're glad you're here. Help us keep pets well, and people safe, by dropping your pet off for their appointment, with phone updates during their visit.

We may contact you to see if our drop-off service is right for you or your pet, and to discuss options should schedules or services shift for your appointment.

If this is an emergency, please call your closest veterinarian or emergency hospital immediately.</Card>
</div>
<Row>
<div style={{marginTop:"30px",marginLeft:"30px"}}>
    
        <Col>
<Card style={{ width: '18rem' }}>
          <Card.Header>PET HEALTH CARE RESOURCES</Card.Header>

  <ListGroup variant="flush">
 
      <ListGroup.Item>

      <Form.Check
          type="radio"
          label="Dental Care"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
        <Form.Check
          type="radio"
          label="Nutrition"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        />
        <Form.Check
          type="radio"
          label="Behavior"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
        />
         <Form.Check
          type="radio"
          label="Vaccinations"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
        /> <Form.Check
        type="radio"
        label="Prasite Control"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
      /> <Form.Check
      type="radio"
      label="Twice-A-year Exam"
      name="formHorizontalRadios"
      id="formHorizontalRadios2"
    /> 

        </ListGroup.Item>
        
        


  </ListGroup>
 
</Card>

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

</div>
<Col>

<Card style={{ width: '40rem', marginTop:"30px" }}>
  <Card.Img variant="top" src="https://media.gettyimages.com/photos/portrait-of-veterinary-nurse-with-dog-on-table-in-veterinary-surgery-picture-id159615213?s=2048x2048" />
  <Container>
  <Card.Body>
  

      <Row>
        <Col>
      <p style={{fontWeight:"bold"}}>Name</p>
      </Col>
      <Col>
      <Container>
      <p style={{marginRight:"5px"}}>Dr. Isma Gheewala</p>
      </Container>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      
      <p style={{fontWeight:"bold"}}>Age</p>
      </Col>
      <Col>
      <Container>
      <p > 30 year</p>
      </Container>

       </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <p style={{fontWeight:"bold"}}>Experience</p>
      </Col>
      <Col>
      <Container>
      <p > 2 years</p>
      </Container>
      </Col>
      </Row>
      <br/>
      
      <Row>
        <Col>
      <p style={{fontWeight:"bold"}}>Duties</p>
      </Col>
      <Col>
      
      <ListGroup>
  <ListGroup.Item>Examine animals to assess their health and diagnose problems</ListGroup.Item>
  <ListGroup.Item>Treat and dress wounds</ListGroup.Item>
  <ListGroup.Item>Perform surgery on animals</ListGroup.Item>
  <ListGroup.Item>Test for and vaccinate against diseases</ListGroup.Item>
  <ListGroup.Item>Operate medical equipment, such as x-ray machines
</ListGroup.Item>
</ListGroup>
     
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <p style={{fontWeight:"bold"}}>Reviews</p>
      </Col>
      <Col>
      <Container>
      <p >This is amazing. The staff is so caring and wonderful. The vets and vet techs are knowledgeable and loving.
         I wouldn't go anywhere else.</p>
      </Container>

      </Col>
      </Row>
      <br/>
    
  </Card.Body>
</Container>
</Card>


</Col>
</Row>


            </div>
        )
    }
}
