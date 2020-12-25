import React, { Component } from 'react';
// import Staff from './Staff'
import DoctorProfile from './DoctorProfile';

export default class Home extends Component {
    render() {
        return (
                      <div className="container" >

                <DoctorProfile/>
                {/* <Staff/> */}
                </div>

        )
    }
}
