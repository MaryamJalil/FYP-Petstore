import React, { useState } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddLostpet from './AddLostpet'
import GetLostpet from './GetLostpet'

const Lostpet = ({auth}) => {


    return (
   
            <div className="row">
                <div className="col-md-8 offset-md-2">
               
               <AddLostpet/>
               <br/>
               <GetLostpet/>
                </div>
            </div>
    );
};

Lostpet.propTypes = {
    auth: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps) (Lostpet));
