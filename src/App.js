import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom'
import Homepage from './components/HomePage/Homepage';
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import jwt from 'jsonwebtoken';
import './assets/css/newCss/customReactTable.css';

class App extends Component {
  state = {
    loggedInUser: {
      userName: "",
      userPassword: ""
    },
    userDataList: [],
    isLoggedIn: false
  }

  componentDidMount() {
    const token = localStorage.token;
    let expTime;
    if (token) {
      expTime = parseInt(jwt.decode(token).exp + "000");
      if (typeof token !== "undefined" && token !== "" && expTime >= new Date()) {
        this.setState({
          isLoggedIn: true
        })
      }
    }
  }

  loginHandle = (isLoggedIn) => {
    this.setState({
      isLoggedIn
    })
  }

  signupHandel = (userName, userPassword) => {
    let userDataList = JSON.parse(JSON.stringify(this.state.userDataList))
    let userData = {
      userName,
      userPassword
    }
    userDataList.push(userData);
    localStorage.userDataList = JSON.stringify(userDataList)
    this.props.history.push("/Login")
  }

  render() {
    return (
      <Router >
          <Route path="/" exact strict render = {(props) => (
      this.state.isLoggedIn ? ( <Homepage {...props} />) : (<Redirect to='/Login' />)
      )}/>  
          <Route path="/Login" exact strict render = {(props) => !this.state.isLoggedIn ? (<Login {...props} loginHandle={this.loginHandle} isLoggedIn = {this.state.isLoggedIn} />) : (<Redirect to='/'/>)
      }/>
          <Route path="/Signup" exact strict render={(props) => !this.state.isLoggedIn ? <Signup {...props} signupHandel={this.signupHandel}/> : (<Redirect to='/'/>)
      }/>
      </Router>
    )
  }
}

export default (App);