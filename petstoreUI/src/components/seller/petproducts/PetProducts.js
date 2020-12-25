import React, { Component } from 'react'


import Breadcrumb from 'react-bootstrap/Breadcrumb'

export default class PetProducts extends Component {
    render() {
        return (
            <div className="container">
                <div style={{marginTop:"30px"}}>
                <div style={{marginLeft:"65px"}}>
                 <Breadcrumb>
  <Breadcrumb.Item href="/seller/addproducts">Add Pet Products</Breadcrumb.Item>
  <Breadcrumb.Item href="/seller/petproducts">
    Products
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/seller/productsave">Save </Breadcrumb.Item>
</Breadcrumb>
</div>
                
                </div>
                
            </div>
        )
    }
}
