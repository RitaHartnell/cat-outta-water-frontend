import React from 'react'

const api = 'http://localhost:3000/api/v1'

export default class AllUsers extends React.Component{
    state = {
        users: []
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
            <div>you are here</div>
        )
    }
}