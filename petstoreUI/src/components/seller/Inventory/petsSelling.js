import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import PageItem from 'react-bootstrap/PageItem';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import {TiPencil} from  'react-icons/ti';
import {MdDelete} from "react-icons/md";
import Button from "react-bootstrap/Button";
import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default class PetsSelling extends Component {
    render() {
        return (
            <div>
              
                
<div style={{marginLeft:"45px",marginTop:"45px"}}>
                  <Navbar bg="dark">
    <Navbar.Brand href="#home" style={{color:"#ffff"}}>Inventory Management For Pets Selling</Navbar.Brand>
  </Navbar>

                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Pet Category</th>
      <th>Bidding</th>
      <th>Breed</th>
      <th>Age</th>
      <th>Starting Price</th>
      <th>Location</th>
      <th>Description</th>
      <th>Update</th>
      <th>Delete</th>




    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Cat</td>
      <td><Button variant="dark">Start</Button>{' '}</td>
      <td>Persian</td>
      <td>2 months</td>
      <td>$20</td>
      <td>Islamabad</td>
      <td>White colour

Active

Vaccinated

Litter trained</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>



    </tr>
    <tr>
      <td>2</td>
      <td>Cat</td>
      <td><Button variant="dark">Start</Button>{' '}</td>
      <td>Siamese</td>
      <td>4 months</td>
      <td> $5</td>
      <td>Islamabad</td>
      <td>A white coloured, beautiful and young Persian cat with good habits is for sale.

</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>




    </tr>
    <tr>
      <td>3</td>
      <td >Dog</td>
      <td><Button variant="dark">Start</Button>{' '}</td>
      <td >German Shepherd</td>
      <td>1 year</td>
      <td>$45</td>
      <td>Lahore</td>
      <td> Pure German shephard

- Punch Face

- Long bone and structure

- No cross

- Age 2.5 yrz

- Available in LalamUSA</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>





    </tr> 
  </tbody>
</Table>
</div>
            </div>
        )
    }
}
