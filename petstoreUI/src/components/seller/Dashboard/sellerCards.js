import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default class SellerCards extends Component {
    render() {
        return (
            <div>
                
                <Container style={{marginLeft:'30px', padding:'50px', bg:'info'}}>
                    <Row>
                        <Col >
  <Card border="primary" style={{ width: '18rem' }}>
    <Card.Body  style={{backgroundColor:'#0277bd'}} >
      <Card.Title>50</Card.Title>
      <Card.Text>
       New Orders
      </Card.Text>
    </Card.Body>
  </Card>
  
  </Col>
<Col>
  <Card border="secondary" style={{ width: '18rem' }}>
    <Card.Body style={{backgroundColor:'#43a047'}}>
      <Card.Title>100</Card.Title>
      <Card.Text>
      Total Products
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <br />
  {/* <Col>

  <Card border="success" style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Success Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  <br /> */}

  <Card border="danger" style={{ width: '18rem' }}>
    <Card.Body style={{backgroundColor:'#fdd835'}}> 
      <Card.Title>50</Card.Title>
      <Card.Text>
       Total Orders
      </Card.Text>
    </Card.Body>
    </Card>
    </Row>
    </Container>      
          </div>
        )
    }
}
