import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle, MDBContainer } from 'mdbreact'
import React from 'react'
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
                    {
                    this.props.user && this.props.avatar !== null ?
                        <MDBCardImage
                            style={{
                                height: '200px',
                                width: 'auto'
                            }} 
                            className="image-fluid" 
                            src={this.props.avatar} 
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
                        <MDBCardTitle>{this.props.user ? this.props.username : ''}</MDBCardTitle>
                        <MDBCardText>{this.props.user ? this.props.bio : ''}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <MDBBtn onClick={()=>{this.useModal(true)}} color='unique'>Edit Profile</MDBBtn>
                    </MDBCardFooter>
                </MDBCard>
                <ProfileModal 
                    patchUser={this.props.patchUser}
                    imgChange={this.props.imgChange} 
                    bioChange={this.props.bioChange} 
                    toggle={this.useModal} 
                    isOpen={this.state.modal}
                />
            </MDBContainer>
        )}
}

export default Profile