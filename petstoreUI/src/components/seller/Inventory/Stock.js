import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Nav from 'react-bootstrap/Nav';
import PageItem from 'react-bootstrap/PageItem';
import Pagination from 'react-bootstrap/Pagination';
import Navbar from 'react-bootstrap/Navbar';
import {TiPencil} from  'react-icons/ti';
import {MdDelete} from "react-icons/md"

export default class Stock extends Component {
    render() {
        return (
            <div>
            <div style={{marginLeft:"45px",marginTop:"45px"}}>
                  <Navbar bg="dark">
    <Navbar.Brand href="#home" style={{color:"#ffff"}}>Inventory Management For Pets Products</Navbar.Brand>
  </Navbar>

                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Id</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Description</th>
      <th>Pet Category</th>
      <th>Pet Breed</th>
      <th>Update</th>
      <th>Delete</th>




    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>001</td>
      <td>$18</td>
      <td>18kg</td>
      <td>IAMS PROACTIVE HEALTH Minichunks Dry Dog Food, Chicken</td>
      <td>Dog</td>
      <td>German Shephard</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>



    </tr>
    <tr>
      <td>2</td>
      <td>002</td>
      <td>$27</td>
      <td>14kg</td>
      <td>Sofa Lounger Dog Bed</td>
      <td> All Dogs</td>
      <td> All Dogs</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>




    </tr>
    <tr>
      <td>3</td>
      <td >003</td>
      <td>$33</td>
      <td >5kg</td>
      <td>Kitty Yarn Puffs Woolen Yarn Cat Toy</td>
      <td>All Cats</td>
      <td>All Cats</td>
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
