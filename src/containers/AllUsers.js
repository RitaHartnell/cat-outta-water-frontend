import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import React from 'react'
import User from '../components/User'

const api = 'http://localhost:3000/api/v1'

export default class AllUsers extends React.Component{
    state = {
        users: []
    }

    makeGrid = () => {
        let userCopy = [...this.state.users]
        let gridArray = []
        let gridRow = []

        while (userCopy[0]) {
            for (let i=0; i<3; i++){
                if(userCopy[0]){
                    gridRow.push(userCopy.shift())
                }
            }

            gridArray.push(gridRow)

            gridRow = []
        }

        return ( 
            gridArray.map((row, idx) => {
                return (
                    <MDBRow key={idx}>
                        {row.map( (userObj) => {
                            return(
                                <MDBCol>
                                    <User 
                                        key={userObj.id}
                                        user={userObj}
                                        username={userObj.username}
                                        avatar={userObj.avatar}
                                        bio={userObj.bio}
                                    />
                                </MDBCol> 
                            )}
                        )}
                    </MDBRow>
                )
            })
        )
        
    }

    componentDidMount() {
        fetch(`${api}/users`)
        .then(response => response.json())
        .then(data => {
            this.setState({users: data}, ()=> console.log(this.state.users))
        }) 
    }

    render() {
        return(
            <MDBContainer>
                {this.makeGrid()}
            </MDBContainer>
        )
    }
}