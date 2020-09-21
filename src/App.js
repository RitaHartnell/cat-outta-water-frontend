import React, { Component } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import "./index.css";
import Nav from "./components/Nav";

const api = 'http://localhost:3000/api/v1'

class App extends Component {
  state = {
    user: null,
    avatar: "",
    bio: ""
  }
  
  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token){
      fetch(`${api}/profile`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(resp => resp.json())
      .then(data => {
      this.setState({ user: data })
      })
    }
  }

  signupHandler = (userObj) => {
    fetch(`${api}/users`, {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      localStorage.setItem("key", data.key)
      this.setState({ user: data}, () => this.props.history.push('/'))
    }) 
    .catch(err => {
      window.alert("Username already taken.");
      localStorage.removeItem("token")
      localStorage.removeItem("key")
    })
  }

  loginHandler = (userObj) => {
    fetch(`${api}/login`, {
      method: "POST",
      headers: {
        accepts: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ user: userObj })
    })
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      localStorage.setItem("key", data.key)
      this.setState(
        { user: data, 
          avatar: data.user.avatar, 
          bio: data.user.bio}, 
          () => this.props.history.push('/'))
    })
    .catch(err => {
      window.alert("invalid Username or Password.");
      localStorage.removeItem("token")
    })
  }

  logOutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    this.props.history.push("/login")
    this.setState({ user: null })
  }

  render() {
    return (
      <div className="App">
        <Nav logout={this.logOutHandler} user={this.props.user}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" render={()=> <Signup submitHandler={this.signupHandler}/>}/>
          <Route path="/login" render={()=> <Login submitHandler={this.loginHandler}/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
