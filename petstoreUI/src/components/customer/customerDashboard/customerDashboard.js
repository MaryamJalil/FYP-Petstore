import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from "react-bootstrap/Button";
import {BsFillBagFill} from "react-icons/bs"

// import Card from 'react-bootstrap/Card'

export default class CustomerDashboard extends Component {
    render() {
        return (
            <div>
                  <div className="container">
               <div style={{marginLeft:"45px",marginTop:"30px"}}>
            <Breadcrumb>
            <Breadcrumb.Item href="/customer/petportfolio">
    Pet Portfolio
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/customer/display">Show Products</Breadcrumb.Item>

</Breadcrumb>
<div  className="d-flex flex-row-reverse">
<Button variant="warning"><BsFillBagFill style={{size:"15rem", marginRight:"10px"}}/>Your Cart</Button>{' '}
</div>

</div>
               

             </div>
             </div>
        )
    }
}
