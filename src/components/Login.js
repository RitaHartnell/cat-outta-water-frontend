import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody, MDBCardFooter } from "mdbreact";

class Login extends React.Component{
    state = {
        username:"",
        password:""
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
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
                                    <p className="h5 text-center mb-4">Sign in</p>
                                    <div className="grey-text">
                                        <MDBInput onChange={this.changeHandler} name='username' label="Type your username" icon="envelope" group type="email"/>
                                        <MDBInput onChange={this.changeHandler} name='password' label="Type your password" icon="lock" group type="password"/>
                                    </div>
                                    <div className="text-center">
                                        <MDBBtn color='unique' onClick={this.submitHandler}>Login</MDBBtn>
                                    </div>
                                </form>
                            </MDBCardBody>
                            <MDBCardFooter>
                                <div className='text-center grey-text'>
                                    <p>Need an Account?</p>
                                    <MDBBtn color='unique' href='/signup'>Sign Up</MDBBtn>
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

export default Login