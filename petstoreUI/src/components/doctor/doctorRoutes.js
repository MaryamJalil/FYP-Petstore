import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DoctorDrawer from './doctorDrawer'
import Hospital from './Hospitals/hospital/Hospital'
import Profile from './Hospitals/Profile/Profile';
import FetchInfo from '../Lostpetinfo/FetchInfo'

export default class doctorRoutes extends Component {
    render() {
        return (
            <>
            <DoctorDrawer/>
            <BrowserRouter>
             <Switch>

             <Route path={`/doctor/hospital`}  component={Hospital} />
      <Route path={`/doctor/profile`}  component={Profile} />
      <Route path={`/doctor/lostpet`}  component={FetchInfo} />


      </Switch>
      </BrowserRouter>
      </>
        )
    }
}
