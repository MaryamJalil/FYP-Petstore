import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';;
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import Pagination from 'react-bootstrap/Pagination';
import Col from 'react-bootstrap/Col';
import {AiOutlineSearch} from "react-icons/ai";



class SearchAppointments extends Component {
  render() {
    return (
      
      <div style={{marginLeft:'40px'}}>
         {/* <SearchField
  placeholder="Search..."
  // onChange={onChange}
  searchText="This is initial search text"
  classNames="test-class"
/> */}
<div style={{padding:'20px'}}>
<Form.Row>
<Col>

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
    <option value="1">Date</option>
    <option value="2">Time</option>
    
  </Form.Control>
  </Col>
  </Form.Row>
  </div>
      
      <Table striped bordered hover variant="dark">
     
  <thead>
    <tr>

      <th>#</th>
      <th>Pet Name</th>
      <th>Owner Name</th>
      <th>Date</th>
      <th>Time</th>
      <th>Apt.Notes</th>


    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Bailey</td>
      <td>Leslie Richardson</td>
      <td>Nov-1</td>
      <td>3:45pm</td>

      <td>This cat is suffering from hotspots and dermatitis</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Casper</td>
      <td>Dalania Devitto</td>
      <td>Dec-1</td>
      <td>3:15pm</td>

      <td>This dog is coming in for a nail trim and grooming</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Chip</td>
      <td>Jason Hemlock</td>
      <td>Dec-1 </td>
      <td> 8:45am</td>

      <td>This cat has a spotty white patch developing on his back</td>
    </tr>
    <tr>

      <td>4</td>
      <td>Chip</td>
      <td>Jason Hemlock</td>
      <td>Dec-1</td>
      <td>10:00am</td>
      <td>This cat has a spotty white patch developing on his back</td>


    </tr>

    <tr>

<td>5</td>
<td>Chyna</td>
<td>Sandie Gobnet</td>
<td>Nov-1 </td>
<td>4:00pm</td>
<td>This dog is coming in for a checkup and to be tested for Salmonella</td>


</tr>

<tr>

<td>6</td>
<td>Cosmo</td>
<td>Francine Benet</td>
<td>Nov-1 </td>
<td> 11:30am</td>
<td>Cosmo's mom would like us to check for arthritic conditions and do a routine checkup</td>


</tr>

<tr>

<td>7</td>
<td>Felix</td>
<td>Jennifer Dawson</td>
<td>Nov-1 </td>
<td> 11:30am</td>
<td>Felix's mom is coming in to follow up on lab work results</td>


</tr><tr>

<td>8</td>
<td>Fluffy</td>
<td>Tracy Westbay</td>
<td>Nov-1 </td>
<td> 2:30pm</td>
<td>Fluffy has some matted hair that needs to be groomed</td>


</tr><tr>

<td>9</td>
<td>Kiko</td>
<td>Kathlyn Zlata</td>
<td>Nov-2  </td>
<td>  9:00am</td>
<td>Kiko has been exhibiting excessive thirst and weight loss for the past few weeks</td>


</tr>
<tr>

<td>10</td>
<td>Lucky</td>
<td>Lisa Choy-Wu</td>
<td>Nov-2 </td>
<td> 11:30am</td>
<td>This cat has tartar buildup and her owner would like his teeth cleaned</td>


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
    );
  }
}

export default SearchAppointments;
