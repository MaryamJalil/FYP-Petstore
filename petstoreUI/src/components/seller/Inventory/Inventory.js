import React, { Component } from 'react';
import Stock from './Stock';
import PetsSelling from './petsSelling';

export default class Inventory extends Component {
    render() {
        return (
            <div className="container">
                <Stock/>
                <PetsSelling/>
                
            </div>
        )
    }
}
