import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Pharm from './Pharmacy/pharm/Pharm'
import Pharmacy from './Pharmacy/pharmacy/Pharmacy'
// import Product from './petproducts/products/Product'

import PharmacistDrawer from './pharmacistDrawer'


export default class Pharmacist extends Component {
    render() {
        return (
            <>
            <PharmacistDrawer/>
            <BrowserRouter>
             <Switch>
      <Route path={`/pharmacist/pharm`}  component={Pharm} />
      <Route path={`/pharmacist/pharmacy`}  component={Pharmacy} />

      {/* <SellerDashboard /> */}
      </Switch>
      </BrowserRouter>
      </>
        )
    }
}
