import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class ProfileModal extends Component {
    render() {
        return (
            <MDBModal center isOpen={this.props.isOpen}>
                <MDBModalHeader>Edit Profile</MDBModalHeader>
                <MDBModalBody>
                    
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={()=>this.props.toggle(false)}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        );
    }
}

export default ProfileModal;