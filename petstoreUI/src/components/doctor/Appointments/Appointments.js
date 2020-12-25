import React, { Component } from 'react';
import Testimonial from './testimonial';
import AddAppointments from './AddAppointments'

export default class Appointments extends Component {
    render() {
        return (
            <div>
                      <div className="container">
                          <AddAppointments/>
                          <Testimonial/>

                
                </div>

            </div>
        )
    }
}
