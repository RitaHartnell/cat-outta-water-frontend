import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import React from 'react'
import User from '../components/User'

const api = 'http://localhost:3000/api/v1'

export default class AllUsers extends React.Component{
    state = {
        users: [],
        comments: []
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
                                        comments={this.filterComments(userObj)}
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
            this.setState({users: data}, ()=> {
                console.log(this.state.users)
                this.getComments()
            })
        }) 
    }

    getComments = () => {
        fetch(`${api}/comments`)
        .then(response => response.json())
        .then(data => {
            this.setState({comments: data}, () => console.log(this.state.comments))
        })
    }

    filterComments = (user) => {
        const commentsCopy = [...this.state.comments]
        const filtered = commentsCopy.filter(comment => comment.commentee_id === user.id)

        return filtered
    }

    render() {
        return(
            <MDBContainer>
                {this.makeGrid()}
            </MDBContainer>
        )
    }
}