import React, { Component } from 'react'
import OrderVaccines from './OrderVaccines';
import OrderMedicines from './OrderMedicines';

export default class PharmacyOrders extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"35px"}}>
                <OrderVaccines/>
                <OrderMedicines/>
                
            </div>
        )
    }
}
