import React, { useState } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddHospital from './AddHospital'
import GetHospitals from './GetHospitals'

const Hospital = ({auth}) => {


    return (
     
            <div className="row">
                <div className="col-md-8 offset-md-2">
               
               <AddHospital/>
               <GetHospitals/>
                </div>
            </div>
    );
};

Hospital.propTypes = {
    auth: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps) (Hospital));
