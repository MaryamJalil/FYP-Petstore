import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default class SavePets extends Component {
    render() {
        return (
            <div>
              <div className="container">
                 <div style={{marginLeft:"45px",marginTop:"30px"}}>
            <Breadcrumb>
  <Breadcrumb.Item href="/seller/addpets">Add Pets</Breadcrumb.Item>
  <Breadcrumb.Item href="/seller/petpic">
    Pets
  </Breadcrumb.Item>
  <Breadcrumb.Item href="/seller/savepets">Save </Breadcrumb.Item>
</Breadcrumb>
</div>
                <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Do you want to save changes?</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Save changes to show pets to the user.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
            </div>
            </div>
        )
    }
}
