import React, { Component } from 'react';
import Toast from 'react-bootstrap/Toast';
import Card from 'react-bootstrap/Card';


import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import lostcat from "../img/lostcat.jfif";
import lostdog from "../img/lostdog.jfif"
import {AiFillMessage} from "react-icons/ai";
import Button from "react-bootstrap/Button";

import {


    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
  
  } from "reactstrap";


export default class CustomerHome extends Component {
    render() {
        return (
            <div className="container">
            <div style={{marginTop:"30px"}} >

            <Col >

<div style={{marginLeft:'35px'}}>
<Card style={{ width: '62rem',padding:"20px" ,marginBottom:"30px",backgroundColor:"#56cfe1"}}>
<Card.Title>Missing Pets</Card.Title>
</Card>
</div>
</Col>
                                    <Row>
                                        <Col >

                <div style={{marginLeft:'45px'}}>
                <Card style={{ width: '35rem',padding:"20px" ,marginBottom:"30px"}}>


                
          <Row>
            <Col md="8">
              <Card style={{ width: '30rem' ,backgroundColor:"#56cfe1"}}>
                <CardHeader>
                  <h5 className="title">ADD A POST OF YOUR LOST PET</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                  <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>Pet Name</label>
                          <Input
                            placeholder="name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Date Lost</label>
                          <Input
                            placeholder="Date Lost"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Phone Number</label>
                          <Input
                            placeholder="Phone Number"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            placeholder=" Address"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>City</label>
                          <Input
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Country</label>
                          <Input
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label>Postal Code</label>
                          <Input placeholder="ZIP Code" type="number" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="8">
                        <FormGroup>
                          <label>Information</label>
                          <Input
                            cols="80"
                          
                            placeholder="Here is your pet description"
                            rows="4"
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          
          </Row>
    
                



  
</Card>
                </div>
                </Col>
                
                <Col>
                <Card style={{ width: '25rem' ,backgroundColor:"#56cfe1" }}>
            
  <Card.Img variant="top" src={lostcat} style={{width:"200px"}}/>
  <Card.Body>
    <Card.Title> Name: Rosie</Card.Title>
    <Card.Text>
   <Card.Text className="list-inline-item"style={{fontWeight:"bold"}}> Location:</Card.Text>
     Rawalpindi Chaklala Scheme 3
    </Card.Text>
    <Card.Text>
   <Card.Text className="list-inline-item"style={{fontWeight:"bold"}}>Date Lost:</Card.Text>2020-06-03
      
    </Card.Text>
    <Card.Text>
   <Card.Text className="list-inline-item"style={{fontWeight:"bold"}}> Information: </Card.Text>
    White persian cat is lost. She has brown eyes and she is 1 years old.
      
    </Card.Text>
    <Card.Text>
   <Card.Text className="list-inline-item"style={{fontWeight:"bold"}}> Phone:</Card.Text>
     03329778286
      
    </Card.Text>
   <Button><AiFillMessage size={25}/> Message owner</Button> 
  </Card.Body>
  <Card.Footer className="text-muted">18 weeks ago</Card.Footer>

  
</Card>
<div style={{marginTop:"30px"}}>
<Card style={{ width: '25rem' ,backgroundColor:"#56cfe1"}}>
<Card.Img variant="top" src={lostdog} style={{width:"200px"}}/>
  <Card.Body>
    <Card.Title><Card.Text className="list-inline-item"style={{fontWeight:"bold"}}> Name:
   </Card.Text>Albino</Card.Title>
    <Card.Text>
   <Card.Text className="list-inline-item"style={{fontWeight:"bold"}}>Location:
   </Card.Text>DHA Phase 3
      
    </Card.Text>
    <Card.Text>
   <Card.Text className="list-inline-item"style={{fontWeight:"bold"}}> Date
      Lost: </Card.Text>2020-02-03
      
    </Card.Text>
    <Card.Text>
   <Card.Text className="list-inline-item"style={{fontWeight:"bold"}}> Information:</Card.Text>
     Brown dog stolen from dha phase 8 few days ago.
      
    </Card.Text>
    <Card.Text>
   <Card.Text className="list-inline-item"style={{fontWeight:"bold"}}> Phone:</Card.Text>
     03329778244
      
    </Card.Text>
    <Button><AiFillMessage size={25}/> Message owner</Button> 



  </Card.Body>
  <Card.Footer className="text-muted">2o weeks ago ago</Card.Footer>

</Card>
</div>
</Col>

</Row>
</div>


            </div>


            
        )
    }
}
