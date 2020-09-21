import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBCardFooter } from "mdbreact";

class Signup extends React.Component{
    state = {
        username:"",
        password:""
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        this.props.submitHandler(this.state)
    }
    render(){
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol></MDBCol>
                    <MDBCol md="6">
                        <MDBCard>
                            <MDBCardBody>
                                <form>
                                    <p className="h5 text-center mb-4">Sign up</p>
                                    <div className="grey-text">
                                        <MDBInput onChange={this.changeHandler} name='username' label="Your username" icon="user" group type="text"/>
                                        <MDBInput onChange={this.changeHandler} name='password' label="Your password" icon="lock" group type="password"/>
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn onClick={this.submitHandler} color="unique">Register</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <div className='text-center grey-text'>
                                    <p>Have an Account?</p>
                                    <MDBBtn color='unique' href='/login'>Log In</MDBBtn>
                                </div>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol></MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Signup