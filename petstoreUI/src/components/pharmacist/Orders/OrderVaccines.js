import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import {TiPencil} from  'react-icons/ti';
import {MdDelete} from "react-icons/md";


export default class OrderVaccines extends Component {
    render() {
        return (
            <div style={{marginLeft:'45px'}}>
                  <Navbar bg="dark">
    <Navbar.Brand href="#home" style={{color:"#ffff"}}>Orders of Vaccines</Navbar.Brand>
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
      <td>FVRCP</td>
      <td>Unshipped</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>
     

    </tr>
    <tr>
      <td>2</td>
      <td>December 12,2020</td>
      <td>DEF12345</td>
      <td>Rabies
</td>
      <td>Shipped</td>
      <td><TiPencil size={20}/></td>
      <td><MdDelete  size={20}/></td>

    </tr>
    <tr>
      <td>3</td>
      <td >December 12,2020</td>
      <td>BVIUO123</td>
      <td>Feline Leukemia
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
