import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {createAppointment} from '../../../actions/appointmentActions/appointmentAction';

function Appointment(props,createAppointment,auth){
  const [form, setForm] = useState({
    name: '',
    description: '',
    age: '',
    breed: '',
    contact:''

  });
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });

  };
  
  const clickSubmit = e => {
    e.preventDefault();
    createAppointment(form,auth.user._id)
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book Appointment
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={clickSubmit} >
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control 
     name="name"
     type="text"
     className="form-control"
     onChange={handleChange}
     value={form.name}
              />
  
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control 
     name="description"
     type="text"
     className="form-control"
     onChange={handleChange}
     value={form.description} />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Age</Form.Label>
    <Form.Control 
     name="age"
     type="text"
     className="form-control"
     onChange={handleChange}
     value={form.age}
/>
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Breed</Form.Label>
    <Form.Control 
     name="breed"
     type="text"
     className="form-control"
     onChange={handleChange}
     value={form.breed}
              />
  </Form.Group>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Contact</Form.Label>
    <Form.Control 
     name="contact"
     type="text"
     className="form-control"
     onChange={handleChange}
     value={form.contact}
              />
  </Form.Group>


</Form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Button  type="submit">Submit</Button>

      </Modal.Footer>
    </Modal>
  );
}

Appointment.propTypes = {
  auth: PropTypes.object.isRequired,
  createAppointment:PropTypes.object.isRequired
};



const mapStateToProps = state => ({
  auth: state.auth,

})

export default (connect(mapStateToProps,
{createAppointment})(Appointment));
