import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';;
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Pagination from 'react-bootstrap/Pagination';
import Col from 'react-bootstrap/Col';
import {AiOutlineSearch} from "react-icons/ai";
import Card from "react-bootstrap/Card";



class pharmacyInventory extends Component {
  render() {
    return (
      <div className="container">

      
      <div style={{marginLeft:'40px'}}>
         {/* <SearchField
  placeholder="Search..."
  // onChange={onChange}
  searchText="This is initial search text"
  classNames="test-class"
/> */}

<div style={{padding:'20px'}}>

<Form.Row style={{marginTop:"30px"}}>
<Col >

<Form inline>
<AiOutlineSearch size={25} />

      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    </Form>
  </Col>
  <Col>
  <Form.Control
    as="select"
    className="my-1 mr-sm-2"
    id="inlineFormCustomSelectPref"
    custom
  >
    <option value="0">Choose...</option>
    <option value="1">Expiry Date</option>
    <option value="2">Vaccines</option>
    <option value="3">Medicines</option>

    
  </Form.Control>
  </Col>
  </Form.Row>
  </div>
      
      <Table striped bordered hover variant="dark">
     
  <thead>
    <tr>

      <th>#</th>
      <th>Pharmacy Name</th>
      <th>Category</th>
      <th> Expiry Date</th>
      <th>Notes</th>


    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Feline Core Vaccines</td>
      <td>Vaccines</td>
      <td>Nov-1-2021</td>
      <td> The core feline vaccines are those for feline herpesvirus 1 (FHV1), 
        feline calicivirus (FCV), feline panleukopenia virus (FPV), feline leukemia virus (FeLV - kittens) and rabies.</td>

    </tr>
    <tr>
      <td>2</td>
      <td>Feline Rabies Virus Vaccines</td>
      <td>Vaccines</td>

    
      <td>Dec-1-2021</td>
      <td>Cats are important in the epidemiology of rabies in the United States. 
        In general we recommend that kittens receive a single dose of killed or recombinant rabies vaccine at 12-16 weeks of age.</td>

    </tr>
    <tr>
      <td>3</td>
      <td>ur Goodness Sake Best Natural Cat UTI Treatment </td>
      <td>Medicines</td>
      <td>Dec-1-2021 </td>
      <td> QUICK RELIEF - Natural Cat UTI Treatment combats bladder and kidney infections</td>
    </tr>
   
 
  


  </tbody>
</Table>
<div style={{alignItems:'center'}}>

<Pagination>
  <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last />
</Pagination>


</div>

</div>

</div>
    );
  }
}

export default pharmacyInventory;
