import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBInput } from 'mdbreact';

class CommentModal extends Component {
    render() {
        return(
            <MDBModal center isOpen={this.props.isOpen}>
                <MDBModalHeader>Edit Profile</MDBModalHeader>
                <MDBModalBody>
                    <MDBInput
                        onChange={(e)=>{this.props.commentChange(e)}}
                        type="textarea"
                        label="Comment"
                        rows="2"
                        icon="pencil-alt"
                    />
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn 
                        color="secondary" 
                        onClick={()=>{this.props.toggle(false)}}
                    >
                        Close
                    </MDBBtn>
                    <MDBBtn 
                        color="primary"
                        onClick={
                            () => {
                                this.props.toggle(false)
                                this.props.patchComment()
                            }
                        }
                    >
                        Save changes
                    </MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        )
    }
}

export default CommentModal