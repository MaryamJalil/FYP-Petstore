import React, { Component } from 'react';
import LandingPage from './LandingPage';
import HospitalLocation from './hospitalLocation';


export default class Location extends Component {
    render() {
        return (
            <div>
                      <div className="container">
                          <LandingPage/>
                          <HospitalLocation/>

          
                </div>

            </div>
        )
    }
}
