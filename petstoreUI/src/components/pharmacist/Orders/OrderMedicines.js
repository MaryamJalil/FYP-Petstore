import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import {TiPencil} from  'react-icons/ti';
import {MdDelete} from "react-icons/md";

export default class OrderMedicines extends Component {
    render() {
        return (
            <div style={{marginLeft:'45px'}}>
                  <Navbar bg="dark">
    <Navbar.Brand href="#home" style={{color:"#ffff"}}>Orders Of Medicines</Navbar.Brand>
  </Navbar>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Order Date</th>
      <th>Order Details</th>
      <th>Order Name</th>
      <th>Action</th>
      <th>Update</th>
      <th>Delete</th>


    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>March 27, 2020</td>
      <td>ABC1234
         </td>
      <td>Baytril Taste Tabs
</td>
      <td>Unshipped</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>
     

    </tr>
    <tr>
      <td>2</td>
      <td>December 12,2020</td>
      <td>4567WERT</td>
      <td>Clavamox
</td>
      <td>Shipped</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>

    </tr>
    <tr>
      <td>3</td>
      <td >December 12,2020</td>
      <td>908SIOP</td>
      <td>Clindamycin
</td>
      <td>Shipped</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>

    </tr>
  </tbody>
</Table>
            </div>
        )
    }
}
