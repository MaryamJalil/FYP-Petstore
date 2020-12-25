import React, { Component } from 'react';
 import Row from 'react-bootstrap/Row';
 import Button from 'react-bootstrap/Button';
 import Col from 'react-bootstrap/Col';
 import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
 import CardDeck from 'react-bootstrap/CardDeck';
 import CardGroup from 'react-bootstrap/CardGroup';



import Image from 'react-bootstrap/Image';
export default class Blog extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#f1faee"}}>
            <div className="container" > 
            <Container>
                <Row>
                    <Col>
               
               
  <Card style={{marginTop:"100px"}}>
    <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0430/9093/5965/articles/5-single-default_1024x1024.jpg?v=1594451688" />
    
    
  </Card>
  </Col>
  <Col>
  <Card.Body>
      <Card.Title style={{marginTop:"100px"}}>About Us</Card.Title>
      <div className="justify-content-md-center"  style={{marginTop:"20px"}}>
      <Card.Text styke={{display:"inline-block"}}>
      This is basically facilitating the people who have pets or
want to have a pet. It’s actually a pet store where people can buy pet, pet products, take appointment from
veterinary doctor, and can post an ad for their lost pet. The pet store shopkeeper adds the image of the product
with complete details like type of food. So, when pet owner fills their pet’s portfolio
in which they will give all details of their pet such as their name, size, age and their nature. So according to the
nature of a pet our system will show the accessories such as which food, toy, litter, shampoo, bed should be given
to a pet. Sellers who add pets for sale will allow the pet lovers to come to their shop by making an offer to bid.
Nowadays, people are becoming health conscious and pets carry germs. So, people can make an online
appointment with the veterinary doctor. 
 Pet owners have an option to advertise the lost pet. He will add all the
details of lost pet such as its name, color, breed, age, size and location of his house. Our system will give
notification to all the people nearby his location.
      </Card.Text>
      </div>
    </Card.Body>
  </Col>
 
  </Row>
</Container>
            </div>

            <div className="container" style={{marginTop:"100px"}}> 
            <Container>
                <Col>
  <Card.Body>
      <h1 style={{paddingLeft:"100px",marginLeft:"250px",marginBottom:"30px"}}>What can you do</h1>

      <Card.Text style={{paddingLeft:"100px",marginLeft:"250px",marginBottom:"30px"}}>
      There Are Countless Ways You Can Join In & Help Us!

      </Card.Text>
    </Card.Body>
  </Col>
 
                <Row>
                    <Col>
               
               
  <Card>
  <Card className="bg-dark text-white">
  <Card.Img  src="https://media.gettyimages.com/photos/couple-paying-for-veterinary-visit-picture-id78035077?s=2048x2048" alt="Card image"
  style={{height:"460px"}}
   />
  <Card.ImgOverlay>
    <Card.Title style={{marginTop:"400px"}}>Take an Appointment</Card.Title>
    {/* <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text> */}
  </Card.ImgOverlay>
</Card>
    
    
  </Card>
  </Col>
  <Col>
  <Card className="bg-dark text-white">
  <Card.Img src="https://media.gettyimages.com/photos/calico-cat-and-terrier-with-food-bowls-side-by-side-picture-id200439224-001?s=2048x2048" 
  alt="Card image"
  style={{height:"460px"}} 
  />
  
  <Card.ImgOverlay>
  <Card.Title style={{marginTop:"400px"}}>Buy Pet Accessories</Card.Title>
    
  </Card.ImgOverlay>
</Card>
  </Col>
  <Col>
  <Card className="bg-dark text-white">
  <Card.Img src="https://media.gettyimages.com/photos/am-cute-picture-id1165606763?s=2048x2048" alt="Card image"
  style={{height:"460px"}} />
  <Card.ImgOverlay>
  <Card.Title style={{marginTop:"400px"}}>Buy Pets</Card.Title>

  </Card.ImgOverlay>
</Card>
  </Col>
  
  </Row>
</Container>
            </div>
            </div>
        )
    }
}
