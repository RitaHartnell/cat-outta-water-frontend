import {MDBCol, MDBContainer, MDBRow} from 'mdbreact'
import React from 'react'
import UserCard from '../components/UserCard'

const api = 'https://cat-became-hungry-api.herokuapp.com/api/v1'

export default class AllUsers extends React.Component{
    state = {
        users: [],
        comments: [],
    }

    postComment = (commentee, comment) => {
        const token = localStorage.getItem("token")
        const commentObj = {commentor_id: this.props.user.user.id, commentee_id: commentee.id, comment: comment}
    
        fetch(`${api}/comments`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                accepts: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({ comment: commentObj })
        })
        .then(resp => resp.json())
        .then(data => {
            const newComments = [...this.state.comments]
            newComments.push(data)
            this.setState({comments: newComments})
        })
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
                                    <UserCard
                                        postComment={this.postComment}
                                        key={idx}
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