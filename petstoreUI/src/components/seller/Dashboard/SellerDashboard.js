import React, { Component } from 'react'
import SellerCards from './sellerCards'
import SellerCharts from './SellerCharts'

export default class SellerDashboard extends Component {
    render() {
        return (
            <div className="container">
                <SellerCards/>
                <SellerCharts/>
            </div>
        )
    }
}
