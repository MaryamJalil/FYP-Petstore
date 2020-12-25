import React, {  useState } from "react";

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container';
import { AiOutlineUser } from "react-icons/ai";
import Form from 'react-bootstrap/Form'
import { register } from '../../actions/authActions/authAction'
import { setAlert } from '../../actions/alertAction'
import { Link } from 'react-router-dom'
import Alert from '../../layout/Alert'


const Signup = ( { register, setAlert, isRegistered}) => {

    const [user, setUser] = useState({ name: '', email: '', role: 'admin', password: '', password2: '' })
    const { name, email, role, password, password2 } = user
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const submit = e => {
        e.preventDefault()
        if (password !== password2) {
            setAlert( 'Password dont match', "danger")
        }
        else {
            console.log(user)
            register(user)
        }
    }
    if(isRegistered){
        return <Redirect to="login"/>
    }

    return (
        <div >

            <Container style={{ marginTop: "100px", width: "300px", padding: "30px", backgroundColor: "#2a9d8f" }} >
                <form onSubmit={submit}>
                    <AiOutlineUser color='black' size='8rem' alignself='center' />
                    <h3>Sign Up</h3>
                    <Alert />
                    <div className="form-group">
                        <label>User Name</label>
                        <input type="name" name="name" className="form-control" placeholder="Enter username" value={name} onChange={handleChange} />
                    </div>


                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter email" value={email} onChange={handleChange} />
                    </div>
                        {/* <Form.Group controlId="exampleForm.SelectCustom"> */}
                            <Form.Label>Select Role</Form.Label>
                            <Form.Control as="select" custom name="role" value={role}  onChange={handleChange}>
                            <option value="admin">Admin</option>

                                <option value="doctor">Doctor</option>
                                <option value="seller">Seller</option>
                                <option value="pharmacist">Pharmacist</option>
                                <option value="customer">Customer</option>
                            </Form.Control>
                        {/* </Form.Group> */}

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Enter password" value={password} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control" name="password2" placeholder="Enter password" value={password2} onChange={handleChange} />
                    </div>

                     <div className="form-group"> 
                                      <div className="custom-control custom-checkbox">
                                          <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                      </div>
                                  </div>
                                  <button type="submit" className="btn btn-dark btn-block">Submit</button> 
                    {/* <div className="question">
                        {errors !== null && <button className="danger">
                            {errors.msg ? errors.msg : errors.error[0].msg}
                            <span> X</span></button>}
                        <p>Already have an accout? {" "} <Link to='/login'>Sign In </Link></p>
                    </div> */}

                </form>
            </Container>
        </div>
    );
}



Signup.propTypes = {
    register: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    isRegistered: PropTypes.bool
};

const mapStateToProps = state => ({
    isRegistered: state.auth.isRegistered
})

export default connect(mapStateToProps, { register, setAlert })(Signup)

