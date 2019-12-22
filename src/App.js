import React, { Component } from 'react';
import './App.css';
import { Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'
import { createBrowserHistory } from "history";
import Homepage from './components/HomePage/Homepage'; 
import Login from './components/Login/Login';
import Signup from './components/SignUp/Signup';
import jwt from 'jsonwebtoken';
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import './assets/css/newCss/customReactTable.css';
const history = createBrowserHistory();

class App extends Component {
  state = {
    loggedInUser:{
      userName:"",
      userPassword:""
    },
    userDataList:[],
    isLoggedIn: false
  }
  
  componentDidMount(){  
    const token = localStorage.token;
    let expTime;
    if(token) {
      expTime = parseInt(jwt.decode(token).exp + "000");
      if(typeof token !== "undefined" && token !== "" && expTime >= new Date()) {
        this.setState({isLoggedIn: true})
      }
    }
  }

  loginHandle = (isLoggedIn) => {
    this.setState({isLoggedIn})
  }

  signupHandel = (userName,userPassword) => {
    let userDataList = JSON.parse(JSON.stringify(this.state.userDataList))
    let userData = {userName,userPassword}
    userDataList.push(userData); 
    localStorage.userDataList = JSON.stringify(userDataList)
    this.props.history.push("/Login")
  }

  render() {
      return (
        <Router history={history} >
          <Route path="/" exact strict render = {(props) =>(
          this.state.isLoggedIn ? ( <Homepage {...props} />) : (<Redirect to='/Login' />)
          )}/>  
          <Route path="/Login" exact strict render = {(props) =>
            !this.state.isLoggedIn ? (<Login {...props} loginHandle={this.loginHandle} isLoggedIn = {this.state.isLoggedIn} />)  : (<Redirect to='/'/>) 
          }/>
          <Route path="/Signup" exact strict render={(props) =>
            !this.state.isLoggedIn ? <Signup {...props} signupHandel={this.signupHandel}/> : (<Redirect to='/'/>)
          }/>
         {/* <Route component={NotFoundPage} /> */}
      </Router>
    )
  }
} 

export default (App);