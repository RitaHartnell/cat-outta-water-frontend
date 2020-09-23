import { MDBBtn, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardFooter, MDBContainer } from 'mdbreact'
import React from 'react'
import BackgroundRenderer from './BackgroundRenderer'



class GameWindow extends React.Component {

    state = {
        page: 0
    }

    choiceClick = (choice) => {
        this.setState({page: choice.goto})
    }

    render() {
        return(
            <MDBContainer>
                <MDBCard>
                    <MDBCardBody>
                        <BackgroundRenderer choice={this.choiceClick} page={this.state.page}/>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <MDBRow around> 
                            <MDBCol style={{textAlign: 'left'}}>
                                <MDBBtn color='unique'>Back</MDBBtn>
                            </MDBCol>
                            <MDBCol style={{textAlign: 'center'}}>
                                <MDBBtn color='unique'>Save</MDBBtn>
                            </MDBCol>
                            <MDBCol style={{textAlign: 'right'}}>
                                <MDBBtn color='unique'>Next</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardFooter>
                </MDBCard>
            </MDBContainer>
        )
    }
}

export default GameWindow