import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import FetchCategories from '../customer/ShowProducts/FetchCategories'
import Customerdrawer from './Customerdrawer'
import FetchProducts from '../customer/ShowProducts/FetchProducts'
import Lostpet from '../customer/Lostpet/lostpet/Lostpet'
import FetchHospitals from '../customer/Appointment/FetchHospitals'
import FetchProfiles from '../customer/Appointment/FetchProfiles'


export default class Customer extends Component {
    render() {
        return (
            <>
            <Customerdrawer/>
            <BrowserRouter>
             <Switch>
      <Route path={`/customer/category`}  component={FetchCategories} />
      <Route path={`/customer/product`}  component={FetchProducts} />
      <Route path={`/customer/lostpet`}  component={Lostpet} />
      <Route path={`/customer/hospital`}  component={FetchHospitals} />
      <Route path={`/customer/profile`}  component={FetchProfiles} />


      </Switch>
      </BrowserRouter>
      </>
        )
    }
}
