import React, { Component } from 'react';
 import Row from 'react-bootstrap/Row';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col';
 import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
 import CardDeck from 'react-bootstrap/CardDeck';
 import CardGroup from 'react-bootstrap/CardGroup';
 import doctor from './images/doctor.png'

import Image from 'react-bootstrap/Image';
export default class ourteam extends Component {
    render() {
        return (
          <div style={{backgroundColor:"#caffbf"}}>
            <div className="container" > 
            <Container>
                <Row >
                    <Col>
               
               
  <Card style={{marginTop:"100px"}}>
    <Card.Img variant="top" src={doctor} />
    
    
  </Card>
  </Col>
  <Col>
  <Card.Body style={{marginTop:"100px"}}>
      <Card.Title>Health and Care</Card.Title>
      <Card.Text>
      We treat pet owners  with a great portion
of love and devotion. Our doctors are the best vets in the state
that guarantee your pet is in a safe and friendly
environment.
      </Card.Text>
    </Card.Body>
  </Col>
 
  </Row>
</Container>
            </div>
            </div>
        )
    }
}
