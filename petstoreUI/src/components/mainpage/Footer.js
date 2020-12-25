import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';


class Footer extends Component {
    render() {
        return (
            <div style={{marginTop:"30px"}}>
               
               <Card className="text-center" style={{backgroundColor:'#A0A0A0'}}>
  <Card.Body>
      <Container>
  <Row>
    <Col>Top</Col>
    <Col>© 1999 - 2020 Animal Search UK Ltd</Col>
  </Row>
    <Row><Col>Privacy</Col>
    <Col>Registration Number: 11117860</Col></Row>
    <Row><Col>Terms&Conditions</Col>
    <Col> Registered Office: 157 High Street, Prestatyn, </Col></Row>
    <Row><Col>Contact Us</Col>
    <Col>Denbighshire, LL19 9AY </Col></Row>
    <Row><Col> Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY </Col>
    <Col >
    <FaFacebookSquare size='2em'/>
     <AiFillTwitterCircle size='2em'/>
    <AiOutlineInstagram size='2em'/>
    </Col>
    </Row>


</Container>
  </Card.Body>


  
</Card>
            </div>
        );
    }
}

export default Footer;