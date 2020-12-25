import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SellerDashboard from './Dashboard/SellerDashboard'
import Category from './petproducts/category/Category'
import Product from './petproducts/products/Product'

import ShopkeeperDrawer from './shopkeeperDrawer'


export default class Seller extends Component {
    render() {
        return (
            <>
            <ShopkeeperDrawer/>
            <BrowserRouter>
             <Switch>
      <Route path={`/seller/category`}  component={Category} />
      <Route path={`/seller/product`}  component={Product} />

      {/* <SellerDashboard /> */}
      </Switch>
      </BrowserRouter>
      </>
        )
    }
}
