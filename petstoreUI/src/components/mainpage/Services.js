import React, { Component } from 'react';
 import Row from 'react-bootstrap/Row';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col';
 import petaccess from './images/petaccess.jfif';
 import lostrecover from './images/lostrecover.jfif';
 import care from './images/care.jfif';



 import Container from 'react-bootstrap/Container'

import Image from 'react-bootstrap/Image';


export default class Services extends Component {
    render() {
        return (
          <div style={{backgroundColor:"#a8dadc"}}>
            <div className="container" >
                <Container >
  <Row>
    <Col xs={6} md={4}>
      <Image src={petaccess} roundedCircle style={{  marginTop:"140px" ,marginRight:"30px"}}   />
      <h3>Pet Accessories</h3>
    </Col>
    {/* <Col xs={6} md={4}>
      <Image src={care} roundedCircle  style={{marginTop:"90px"}}/>
      <h3>Pet Health and care</h3>

    </Col> */}
    <Col xs={6} md={4}>
      <Image src={care} roundedCircle  style={{marginTop:"90px"}}/>
      <h3>Pet Health and care</h3>

    </Col>
    <Col xs={6} md={4}>
      <Image src={lostrecover} roundedCircle  style={{marginTop:"90px"}}/>
      <h3>Pet Lost recovery</h3>

    </Col>
  </Row>
</Container>
            </div>
            </div>
        )
    }
}
