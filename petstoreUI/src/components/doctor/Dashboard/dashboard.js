import React, { Component } from 'react';
import DocCards from './DocCards.js';
import DoctorCharts from './DoctorCharts';
import SearchAppointments from '../Appointments/SearchAppointments';
// import Card from 'react-bootstrap/Card'

export default class dashboard extends Component {
    render() {
        return (
            <div>
                <DocCards/>
                <DoctorCharts/>
                {/* <Card  style={{padding:'20px'}}> 
            <SearchAppointments/>
            </Card>            */}
             </div>
        )
    }
}
