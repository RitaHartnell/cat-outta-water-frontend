import { MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardImage, MDBCardText, MDBCardTitle, MDBContainer } from 'mdbreact'
import React from 'react'
import def from '../assets/default-avatar.png'
import ProfileModal from '../containers/ProfileModal'
import Comment from './Comment'

const api = 'https://cat-became-hungry-api.herokuapp.com/api/v1'

class Profile extends React.Component {
    state = {
        modal: false,
        comments: []
    }

    useModal = (bool) => {
        this.setState({modal: bool})
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
            console.log(prevProps)
            if (this.props.user) {
                this.getComments()
            }
        }
    }

    getComments = () => {
        fetch(`${api}/comments`)
        .then(response => response.json())
        .then(data => {
            this.setState({comments: this.filterComments(data, this.props.user.user)}, () => console.log(this.state.comments))
        })
    }

    filterComments = (comments, user) => {
        const commentsCopy = [...comments]
        const filtered = commentsCopy.filter(comment => comment.commentee_id === user.id)

        return filtered
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
                        {
                            this.props.user && this.state.comments.length !== 0 ? 
                                this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>) 
                                : <MDBCardText>No one's commented on you yet :(</MDBCardText>
                        }
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