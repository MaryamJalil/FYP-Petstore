import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FetchPharm from './FetchPharm'
import Customerdrawer from '../Customerdrawer'
import FetchPharmacy from './FetchPharmacy'



export default class Medi extends Component {
    render() {
        return (
            <>
            <Customerdrawer/>
            <BrowserRouter>
             <Switch>
      <Route path={`/customer/pharm`}  component={FetchPharm} />
      <Route path={`/customer/pharmacy`}  component={FetchPharmacy} />

      {/* <SellerDashboard /> */}
      </Switch>
      </BrowserRouter>
      </>
        )
    }
}
