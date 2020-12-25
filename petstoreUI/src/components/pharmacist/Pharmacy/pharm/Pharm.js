import React, { useState } from "react";
import Layout from "../Layout";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddPharm from './AddPharm'
import GetPharms from './GetPharms'

const Pharm = ({auth}) => {


    return (
        <Layout
            title="Add a new category"
            // description={`Hey  ${user.name}, ready to add a new category?`}
            description={`Hey  ${auth.user.name}, ready to add a new category of pharmacy?`}

        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
               
               <AddPharm/>
               <GetPharms/>
                </div>
            </div>
        </Layout>
    );
};

Pharm.propTypes = {
    auth: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps) (Pharm));
