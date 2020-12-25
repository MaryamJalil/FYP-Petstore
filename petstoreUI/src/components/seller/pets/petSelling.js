import React, { Component } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export default class petSelling extends Component {
    render() {
        return (
            <div className="container">
            <div style={{marginLeft:"45px",marginTop:"30px"}}>
               <Breadcrumb>
     <Breadcrumb.Item href="/seller/addpets">Add Pets</Breadcrumb.Item>
     <Breadcrumb.Item href="/seller/petpic">
       Pets
     </Breadcrumb.Item>
     <Breadcrumb.Item href="/seller/savepets">Save </Breadcrumb.Item>
   </Breadcrumb>
   </div>
   
   
                
            </div>
        )
    }
}
