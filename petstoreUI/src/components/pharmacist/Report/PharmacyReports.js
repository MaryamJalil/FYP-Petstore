import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';

export default class PharmacyReport extends Component {
    render() {
        return (
          <div className="container">
            <div style={{marginLeft:'45px' ,marginTop:"50px"}}>
                  <Navbar bg="dark">
    <Navbar.Brand href="#home" style={{color:"#ffff"}}>Report</Navbar.Brand>
  </Navbar>
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Total pharmacy</th>
      <th>Total expired medicines</th>
      <th>Total Sales</th>
      <th>Pending Orders</th>
      


    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>100</td>
      <td>10
         </td>
      <td>$90</td>
      <td>12</td>
     
     

    </tr>
    <tr>
      <td>2</td>
      <td>200</td>
      <td>20</td>
      <td>$150</td>
      <td>10</td>
   

    </tr>
    <tr>
      <td>3</td>
      <td >150</td>
      <td>50</td>
      <td>$400</td>
      <td>0</td>
      
    </tr>
  </tbody>
</Table>
            </div>
            </div>
        )
    }
}
