import React, { Component } from 'react';
import OrderPets from './OrderPets';
import OrderProducts from './OrderProducts';

export default class sellerOrder extends Component {
    render() {
        return (
            <div className="container">
                <OrderPets/>
                <OrderProducts/>
            </div>
        )
    }
}
