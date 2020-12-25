import React, { Component } from 'react'
import PharmacistCards from './pharmacistCards';
import PharmacistCharts from './pharmacistCharts';


export default class pharmacistDashboard extends Component {
    render() {
        return (
            <div className="container">
                <PharmacistCards/>
                <PharmacistCharts/>
                
            </div>
        )
    }
}
