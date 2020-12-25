import React, { useState } from "react";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Alert from '../../layout/Alert'
import { AiOutlineUser } from "react-icons/ai";


import { login } from '../../actions/authActions/authAction'


const Login=({login, auth})=> {
    const [user, setUser] = useState({ email: '', role: 'admin', password: '' })
    const {  email, role, password, } = user
    const handleChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }


const submit = e => {
    e.preventDefault()
    login({email, role, password})
}
if(auth.isAuthenticated){
    return (auth.role==="doctor" ? <Redirect to="doctor"/> : 
    auth.role==="admin" ? <Redirect to="admin"/>:
    auth.role==="customer" ? <Redirect to="customer"/> :
    auth.role==="seller" ? <Redirect to="seller"/>  :
    auth.role==="pharmacist" ? <Redirect to="pharmacist"/> : <Redirect to='/'/>
    )
}


        return (
          <div >
            
            <Container style={{marginTop:"100px",width:"300px" ,padding:"30px",backgroundColor:"#2a9d8f"}}>
            <form onSubmit={submit}>
            <AiOutlineUser color='black' size='8rem' alignself='center' />
                <h3>Log In</h3>
                    <Alert />

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={handleChange} />
                </div>
                {/* <Form.Group controlid="exampleForm.SelectCustom"> */}
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
                    <input type="password" name= "password" className="form-control" placeholder="Enter password"  onChange={handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </Container>
            </div>
        );
    
}


Login.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { login })(Login)
