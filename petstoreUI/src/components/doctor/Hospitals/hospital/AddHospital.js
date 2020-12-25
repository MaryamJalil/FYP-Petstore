import React, { useState } from "react";

// import { isAuthenticated } from "../../../auth";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {createHospital} from '../../../../actions/hospitalActions/hospitalActions';
import Alert from '../../../../layout/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const AddHospital = ({auth, createHospital}) => {
    const [name, setName] = useState("");

    const handleChange = e => {
        setName(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        createHospital(name,auth.user._id)
    }

    return (
        <form onSubmit={clickSubmit}>
            <div className="form-group">
            <Alert />
                <label className="text-muted">Name</label>
             
                <Form inline>
  <Form.Label htmlFor="inlineFormInputName2" srOnly>
    Name
  </Form.Label>
  <Form.Control
   onChange={handleChange}
   value={name}
   autoFocus
   required
  />
   <Button style={{marginLeft:'20px',padding:'8px'}} type="submit" className="mb-2">
    Create 
  </Button>    
</Form>

            </div>
               </form>
    );
};

AddHospital.propTypes = {
    auth: PropTypes.object.isRequired,
    createHospital: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
    auth: state.auth,
})
export default (connect (mapStateToProps, {createHospital}) (AddHospital));
