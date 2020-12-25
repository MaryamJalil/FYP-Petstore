
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col
} from "reactstrap";

import {AiFillFacebook} from "react-icons/ai";
import {AiFillGoogleCircle} from "react-icons/ai";
import {AiFillTwitterCircle} from "react-icons/ai";
import Image from "react-bootstrap/Image";
import profilepic from "./img/profilepic.jpg";


class PharmacistProfile extends React.Component {
  render() {
    return (
      <div className="container" style={{marginTop:"30px"}}>
        <div className="content" style={{marginLeft:'45px'}}>
          <Row>
            <Col md="8">
              <Card style={{backgroundColor:"#bdb2ff"}}>
                <CardHeader>
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup   >
                          <label>Company Name</label>
                          <Input
                            // defaultValue="Creative Code Inc."
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            placeholder="Username"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-md-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            placeholder="First Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-md-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            placeholder="Last Name"
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
                            placeholder="Home Address"
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
                          <label>About Me</label>
                          <Input
                            cols="80"
                          
                            placeholder="Here can be your description"
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
            <Col md="4">
              <Card className="card-user" style={{backgroundColor:"#ffc6ff"}}>
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
   
    <Image src={profilepic} roundedCircle style={{width:'150px', flexDirection:'row',marginBottom:'20px',marginLeft:'55px'}} />

    
                    <p className="description"  style={{fontWeight:'bold'}}>Pharmacist</p>
                  </div>
                  <div className="card-description">
                  Vety-care Pharmaceuticals (pvt is listed in Veterinary Medicines, and located in Islamabad Pakistan.
                   The phone number is (92 51) 4441083, 4441081, and the address is Plot No.81/a,st.# 6,i-10/3 Islamabad. 
                   Vety-care Pharmaceuticals (pvt is part of Animals, Birds, Pets & Live Stocks Directory,
                   find complete contact details, email address and website address with location maps and owner name.


                  </div>
                </CardBody>
                <CardFooter>
                  <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <AiFillFacebook size={30}/>
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">

                      <AiFillTwitterCircle size={30}/>
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <AiFillGoogleCircle  size={30}/>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default PharmacistProfile;
