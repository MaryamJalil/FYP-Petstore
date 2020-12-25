import React, { useState } from "react";
import Layout from "../Layout";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddProducts from './AddProducts'
import GetProducts from './GetProducts'

const Product = ({auth}) => {


    return (
        // <Layout
        //     title="Add a new Product"
        //     // description={`Hey  ${user.name}, ready to add a new Product?`}
        //     description={`Hey  ${auth.user.name}, ready to add a new Product?`}

        // >
            <div className="row">
                <div className="col-md-8 offset-md-2">
               
               <AddProducts/>
               <br/>
               <GetProducts/>
                </div>
            </div>
        // </Layout>
    );
};

Product.propTypes = {
    auth: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps) (Product));
