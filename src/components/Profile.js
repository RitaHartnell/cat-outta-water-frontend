import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle, MDBContainer } from 'mdbreact'
import React, { useEffect, useState } from 'react'
import def from '../assets/default-avatar.png'
import ProfileModal from '../containers/ProfileModal'

class Profile extends React.Component {
    state = {
        modal: false
    }

    useModal = (bool) => {
        this.setState({modal: bool})
    }

    render() {
        return(
            <MDBContainer>
                <MDBCard>
                    <MDBCardHeader>
                        User Profile
                    </MDBCardHeader>
                    {this.props.user ? console.log(this.props.user.user.avatar) : ''}
                    {
                    this.props.user && this.props.user.user.avatar ?
                        <MDBCardImage
                            style={{
                                height: '200px',
                                width: 'auto'
                            }} 
                            className="image-fluid" 
                            src={this.props.user.user.avatar} 
                            waves 
                            alt=''
                        />
                    :
                        <MDBCardImage 
                            style={{
                                height: '200px',
                                width: 'auto'
                            }} 
                            className="image-fluid" 
                            src={def} 
                            waves 
                            alt=''
                        />
                    }
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.user ? this.props.user.user.username : ''}</MDBCardTitle>
                        <MDBCardText>{this.props.user ? this.props.user.user.bio : ''}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <MDBBtn onClick={()=>{this.useModal(true)}} color='unique'>Edit Profile</MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
                <ProfileModal toggle={this.useModal} isOpen={this.state.modal}/>
            </MDBContainer>
        )}
}

export default Profile