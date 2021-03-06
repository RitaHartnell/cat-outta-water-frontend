import { MDBBtn, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBCardFooter, MDBContainer } from 'mdbreact'
import React from 'react'
import BackgroundRenderer from './BackgroundRenderer'



class GameWindow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 0
        }
    }

    componentDidMount(){
        this.loadGame()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.saveState !== this.props.saveState || (prevState.page !== this.state.page && this.state.page == 0)) {
            this.loadGame()
        }
    }

    choiceClick = (choice) => {
        this.setState({page: choice.goto})
    }

    nextClick = () => {
        if (this.state.page !== 'END') {
            const newPage = this.state.page + 1
            this.setState({page: newPage})
        }
    }

    loadGame = () => {
        this.setState({page: this.props.saveState})
    }

    render() {
        return(
            <MDBContainer>
                <MDBCard>
                    <MDBCardBody>
                        <BackgroundRenderer next={this.nextClick} choice={this.choiceClick} page={this.state.page}/>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <MDBRow around> 
                            <MDBCol style={{textAlign: 'left'}}>
                                <MDBBtn color='unique' onClick={()=> this.loadGame()} >Load</MDBBtn>
                            </MDBCol>
                            <MDBCol style={{textAlign: 'right'}}>
                                <MDBBtn color='unique' onClick={
                                    () => {
                                        this.props.saveGame(this.state.page)
                                        window.alert('saved!')
                                    }
                                }>Save</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardFooter>
                </MDBCard>
            </MDBContainer>
        )
    }
}

export default GameWindow