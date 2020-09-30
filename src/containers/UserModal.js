import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBCardImage } from 'mdbreact';
import CommentModal from './CommentModal'
import Comment from '../components/Comment'
import def from '../assets/default-avatar.png'
import React from 'react'

class UserModal extends React.Component {
    state ={
        isOpen: false
    }

    useModal = (bool) => {
        this.setState({isOpen: bool})
    }

    render() {
        return(
            <MDBModal size='lg' center isOpen={this.props.isOpen}>
                <MDBModalHeader>
                    <span>
                        <MDBCardImage 
                            style={{
                                width: '50px',
                                height: 'auto'
                            }}
                            className="image-fluid" 
                            src={this.props.avatar !== '' ? this.props.avatar : def} 
                            waves 
                            alt=''
                        /> 
                        {this.props.user ? this.props.username : ''}
                    </span>
                </MDBModalHeader>
                <MDBModalBody>
                    {this.props.user ? this.props.bio : ''}
                </MDBModalBody>
                <div style={{
                    borderTop: '1px solid lightgrey'
                }}>

                </div>
                <MDBModalBody>
                    Comments:
                    <br/>
                    {this.props.comments !== [] ? this.props.comments.map(comment =>
                    <>
                        <div style={{
                        borderTop: '1px solid lightgrey'
                        }}>

                        </div>
                        <Comment key={comment.id} comment={comment}/> 
                    </>) : "There's nothing here :("}
                </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn 
                            color="secondary" 
                            onClick={()=>{this.props.toggle(false)}}
                        >
                            Close
                        </MDBBtn>
                        <MDBBtn color='unique' onClick={()=>{this.useModal(true)}}>Leave Comment</MDBBtn>
                    </MDBModalFooter>
                <CommentModal 
                    user={this.props.user}
                    toggle={this.useModal}
                    isOpen={this.state.isOpen}
                    commentChange={this.props.commentChange}
                    username={this.props.username}
                    postComment={this.props.sendPostComment}
                />
            </MDBModal>
        )
    }
}

export default UserModal