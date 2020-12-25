import React, { Component } from 'react';
 import Row from 'react-bootstrap/Row';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col';
 import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
 import CardDeck from 'react-bootstrap/CardDeck';
 import CardGroup from 'react-bootstrap/CardGroup';
 import lostpet from './images/lostpet.png';
 import location from './images/location.png'


import Image from 'react-bootstrap/Image';
export default class petlost extends Component {
    render() {
        return (
          <div style={{backgroundColor:"#ffd6a5"}}>
            <div className="container"  >
                            <Container >

                <CardDeck >
  <Card style={{marginTop:"100px"}}>
    <Card.Img variant="top" src={lostpet}/>
    <Card.Body >
      <Card.Title>Add an Advertise</Card.Title>
      <Card.Text>
      If someone wants to post an ad for his missing pet then he can add all the details of
his pet such as age, gender, color, breed and location of a house.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{marginTop:"100px"}}>
    <Card.Img variant="top" src="https://tractive.com/static/images/sections/tractive-gps-dog-live-tracking.gif" 
/>
<br/>
<Card.Img variant="top" src={location}/>
    <Card.Body>
      <Card.Title>Find Pet Location</Card.Title>
      <Card.Text>
      The notification will go to all the
people that live nearby their house.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card style={{marginTop:"100px"}}>
    <Card.Img variant="top" src={location}/>
    <Card.Body>
      <Card.Title>Contact </Card.Title>
      <Card.Text>
      A message box will be available on the user profile for contact. Any person who finds a missing pet can contact you.
      </Card.Text>
    </Card.Body>
   
  </Card>
</CardDeck>
</Container>
            </div>
            </div>
        )
    }
}
