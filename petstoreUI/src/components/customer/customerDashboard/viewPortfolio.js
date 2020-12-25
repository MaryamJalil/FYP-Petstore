import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import CustomerDashboard from './customerDashboard';

export default class ViewPortfolio extends Component {
  render() {
    return (
      <div className="container">
                  <CustomerDashboard/>

        <div  style={{marginTop:"30px" ,marginLeft:"170px"}}>
        <Card style={{ width: '40rem',backgroundColor:"#80ffdb" }}>
  <Card.Img variant="top" src="https://media.gettyimages.com/photos/beagle-puppy-lying-down-picture-id980647656?s=2048x2048" />
  <Card.Body>
    <Card.Text>
      <Row>
        <Col>
      <Card.Text style={{fontWeight:"bold"}}>Name</Card.Text>
      </Col>
      <Col>
      <Card.Text style={{marginRight:"5px"}}>Milo</Card.Text>
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
      <Card.Text style={{fontWeight:"bold"}}>Pet Category</Card.Text>
      </Col>
      <Col>
      <Card.Text > Dog</Card.Text>
      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text style={{fontWeight:"bold"}}>Breed</Card.Text>
      </Col>
      <Col>
      <Card.Text >German Sheperd</Card.Text>

      </Col>
      </Row>
      <br/>
      <Row>
        <Col>
      <Card.Text style={{fontWeight:"bold"}}>Describe your Pet's Nature</Card.Text>
      </Col>
      <Col>
     <Card.Text>My ideal dog isn’t just a dog, but so much more. He is my confident. He is the friend who never judges me, for better or worse.
         I don’t judge him for imperfections, but instead we choose to help one another enjoy the good and bad days, and be the best we can be.
          He doesn’t give up on me, even when I give up on myself. He knows I will never give up on him. We get one another, without ever having 
          to say a word. I can talk to him, and feel like he understands me, or at least is listening. 
        He is the perfect confident, for he simply listens without judging, and who keeps secrets better than a dog?</Card.Text>
      </Col>
      </Row>

    </Card.Text>
  </Card.Body>
  
</Card>
      </div>
      </div>
    )
  }
}
