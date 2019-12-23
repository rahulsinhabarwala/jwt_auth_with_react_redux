import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import '../../App.css'
export default class Login extends Component {
  state = {
    userName: '',
    userPassword: '',
    isLoggedIn: false,
    userDataList: [],
    errorMessage: ""
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  loginHandle = () => {
    if (localStorage.userDataList) {
      let userDataList = JSON.parse(localStorage.userDataList)
      let userExist = false;
      userDataList.forEach((item) => {
        if (item.userName === this.state.userName && item.userPassword === this.state.userPassword) {
          userExist = true
        } else {
          this.setState({
            errorMessage: "Entered data not correct"
          })
        }
      })
      if (userExist) {
        let token = jwt.sign({
          data: this.state.userName
        }, 'secret', {
          expiresIn: 60 * 60
        });
        localStorage.token = token
        this.props.loginHandle(true)
      }
    } else {
      alert("sign-up first")
      this.props.history.push("/Signup")
    }
  }

  render() {
    return (
    <article className="log-form">
        <h2 className='page-heading'>Login</h2>
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="email">UserName:</label>
                    <div className="col-sm-10">
                        <input type="name" className="form-control" name='userName' id="email" placeholder="Enter UserName" value={this.state.userName} onChange={this.onChange} />
                    </div>
                 </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="pwd" name="userPassword" placeholder="Enter password" value={this.state.userPassword} onChange={this.onChange}/>
                    </div>
                </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                        <button type="button" className="btn btn-default" onClick ={this.loginHandle}>Login</button>
                        <button type="button" className="btn btn-default" onClick ={() => this.props.history.push("/Signup")}>Sign up</button> 
                        </div>                        
                    </div>
            </form>
            
            {this.state.errorMessage &&
      <div className='login-error'><span>{this.state.errorMessage}</span></div>
      }
        </article>
    )
  }
}