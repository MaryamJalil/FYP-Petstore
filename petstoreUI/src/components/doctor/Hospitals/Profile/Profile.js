import React, { useState } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import AddProfiles from './AddProfiles'
import GetProfiles from './GetProfiles'

const Profile = ({auth}) => {


    return (
      
            <div className="row">
                <div className="col-md-8 offset-md-2">
               
               <AddProfiles/>
               <br/>
               <GetProfiles/>
                </div>
            </div>
    );
};

Profile.propTypes = {
    auth: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps) (Profile));
