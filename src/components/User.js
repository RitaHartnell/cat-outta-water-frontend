import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle } from 'mdbreact'
import React from 'react'
import def from '../assets/default-avatar.png'

const User = (props) => {
    return(
        <MDBCard style={{
            width: '200px'
        }}>
            {props.user && props.avatar !== null ?
                <MDBCardImage
                    style={{
                        height: '200px',
                        width: 'auto'
                    }} 
                    className="image-fluid" 
                    src={props.avatar} 
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
                <MDBCardTitle>{props.user ? props.username : ''}</MDBCardTitle>
                <MDBCardText>{props.user ? props.bio : ''}</MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}

export default User