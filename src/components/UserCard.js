import { MDBCard, MDBCardImage, MDBCardText} from 'mdbreact'
import React from 'react'
import def from '../assets/default-avatar.png'
import UserModal from '../containers/UserModal'

class UserCard extends React.Component {

    state = {
        isOpen: false,
        newComment: ''
    }

    useModal = (bool) => {
        console.log("i've been clicked")
        this.setState({isOpen: bool})
    }

    commentChange = (e) => {
        this.setState({newComment: e.target.value})
    }

    sendPostComment = (commentee) => {
        this.props.postComment(commentee, this.state.newComment)
    }

    render() {
        return(
            <>
            <MDBCard onClick={() => this.useModal(true)} style={{
                width: '350px',
                position: 'relative'
            }}>
                {this.props.user && this.props.avatar !== null ?
                    <>
                    <MDBCardImage
                        style={{
                            height: '350px',
                            width: 'auto'
                        }} 
                        className="image-fluid" 
                        src={this.props.avatar} 
                        waves 
                        alt=''
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0px',
                            color: 'white',
                            width: '100%',
                            textAlign: 'center',
                            background: 'rgba(70, 70, 70, .5)'
                        }}
                    >
                        <MDBCardText>
                            {this.props.username}
                        </MDBCardText>
                    </div>
                    </>
                :
                    <>
                    <MDBCardImage 
                        style={{
                            height: '350px',
                            width: 'auto'
                        }} 
                        className="image-fluid" 
                        src={def} 
                        waves 
                        alt=''
                    />
                    <div
                        style={{
                            position: 'absolute',
                            bottom: '0px',
                            color: 'white',
                            width: '100%',
                            textAlign: 'center',
                            background: 'rgba(70, 70, 70, .5)'
                        }}
                    >
                        <MDBCardText>
                            {this.props.username}
                        </MDBCardText>
                    </div>
                    </>
                }
            </MDBCard>
            <UserModal
                isOpen={this.state.isOpen}
                toggle={this.useModal}
                user={this.props.user}
                username={this.props.username}
                bio={this.props.bio}
                avatar={this.props.avatar}
                comments={this.props.comments}
                commentChange={this.commentChange}
                sendPostComment={this.sendPostComment}
            />
            </>
        )
    }
}

export default UserCard