import React, { useState } from "react";
import Layout from "../Layout";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddPharmacy from './AddPharmacy'
import GetPharmacy from './GetPharmacy'

const Pharmacy= ({auth}) => {


    return (
        <Layout
            title="Add a new Product"
            // description={`Hey  ${user.name}, ready to add a new Product?`}
            description={`Hey  ${auth.user.name}, ready to add a new Product?`}

        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
               
               <AddPharmacy/>
               <br/>
               <GetPharmacy/>
                </div>
            </div>
        </Layout>
    );
};

Pharmacy.propTypes = {
    auth: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps) (Pharmacy));
