import React, { Component } from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Profile from './components/Profile'
import "./index.css";
import Nav from "./components/Nav";
import GameWindow from "./game components/GameWindow";
import AllUsers from './containers/AllUsers'
import FooterPage from "./components/Footer";
import Forum from "./components/Forum"

const api = 'https://cat-became-hungry-api.herokuapp.com/api/v1'

class App extends Component {
  state = {
    user: null,
    avatar: "",
    bio: "",
    username: "",
    saveState: 0
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
        this.setState({ 
          user: data.user,  
          bio: data.user.user.bio, 
          avatar: data.user.user.avatar, 
          username: data.user.user.username,
          saveState: data.user.user.save_state !== undefined ? data.user.user.save_state : 0
        })
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
      this.setState({ 
        user: data.user, 
        bio: data.user.user.bio, 
        avatar: data.user.user.avatar, 
        username: data.user.user.username ,
        saveState: 0
      }, () => this.props.history.push('/'))
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
        { user: data.user, 
          avatar: data.user.avatar, 
          bio: data.user.bio,
          username: data.user.username,
          saveState: data.user.user.save_state !== undefined ? data.user.user.save_state : 0
        }, 
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

  patchUser = () => {
    const token = localStorage.getItem("token")
    const user = {
        username: this.state.username,
        avatar: this.state.avatar,
        bio: this.state.bio,
        save_state: this.state.saveState
    }

    fetch(`${api}/users/${this.state.user.user.id}`,
        {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json'
            }
        })
    .then(resp => resp.json())
    .then(data => this.setState({
      user: data.user,
      avatar: data.user.user.avatar,
      bio: data.user.user.bio,
      username: data.user.user.username,
      saveState: data.user.user.save_state
    }))
  }

  saveGame = (page) => {
    this.setState({saveState: page}, () => this.patchUser())
  }

  imgChange = (e) => {
    this.setState({avatar: e.target.value})
  }

  bioChange = (e) => {
    this.setState({bio: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <Nav logout={this.logOutHandler} user={this.state.user}/>
        <Switch>
          <Route exact path="/" render={()=> <Home/>} />
          <Route path="/signup" render={()=> <Signup submitHandler={this.signupHandler}/>}/>
          <Route path="/login" render={()=> <Login submitHandler={this.loginHandler}/>}/>
          <Route path='/game' render={()=> <GameWindow saveGame={this.saveGame} saveState={this.state.saveState}/>}/>
          <Route path='/forum' render={()=> <Forum/>}/>
          <Route exact path="/users" render={()=> <AllUsers user={this.state.user}/>}/>
          <Route 
            path={`/users/${this.state.username}`} 
            render={
              () => {
                return(
                  <Profile 
                    patchUser={this.patchUser} 
                    user={this.state.user}
                    username={this.state.username}
                    bio={this.state.bio}
                    avatar={this.state.avatar}
                    imgChange={this.imgChange}
                    bioChange={this.bioChange}
                  />
                )
              }
            }
          />
        </Switch>
        <FooterPage/>
      </div>
    );
  }
}

export default withRouter(App);
