import React, { useState } from "react";
// import Layout from "../Layout";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddCategory from './AddCategory'
import GetCategories from './GetCategories'

const Category = ({auth}) => {


    return (
        // <Layout
        //     title="Add a new category"
        //     // description={`Hey  ${user.name}, ready to add a new category?`}
        //     description={`Hey  ${auth.user.name}, ready to add a new category?`}

        // >
            <div className="row">
                <div className="col-md-8 offset-md-2">
               
               <AddCategory/>
               <GetCategories/>
                </div>
            </div>
        // </Layout>
    );
};

Category.propTypes = {
    auth: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps) (Category));
