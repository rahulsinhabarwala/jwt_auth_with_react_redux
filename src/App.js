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

  loginHandle = (userName,userPassword) => {
    console.log('localStorage.userDataList', localStorage.userDataList)
    if(localStorage.userDataList){
      let userDataList = JSON.parse(localStorage.userDataList)
        let userExist = userDataList.map((item) => 
      item.userName === userName && item.userPassword === userPassword ?  item : null )
      if(userExist){
        let token = jwt.sign({
          data: userExist
        }, 'secret', { expiresIn: 60 * 60 });
        localStorage.token = token
        }
        this.setState({isLoggedIn: true})
    } else{
      alert("sign-in first")
      // this.props.history.push("/signin")
    }
  }

  signupHandel = (userName,userPassword) => {
    console.log('userName', userName)
    let userDataList = JSON.parse(JSON.stringify(this.state.userDataList))
    let userData = {userName,userPassword}
    userDataList.push(userData); 
    console.log('userDataList', userDataList)
    localStorage.userDataList = JSON.stringify(userDataList)
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
      </Router>
    )
  }
} 

export default (App);