import React, { Component } from 'react'
import '../../App.css';
export default class Signup extends Component {
  state = {
    userName: '',
    userPassword: '',
    confirmUserPassword: '',
    isSignupSuccess: false,
    errorMessage: ""
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})

  handelError = () => {
    let errorMessage
    if (!this.state.userName || (this.state.userName && this.state.userName.length < 3)) {
      errorMessage = "Please enter correct name"
    } else {
      if (this.state.userPassword && this.state.userPassword.length < 3) {
        errorMessage = "Password should be greater than 3 characters"
      } else if (this.state.userPassword !== this.state.confirmUserPassword) {
        errorMessage = "Password and confirm password does not match"
      } else {
        errorMessage = "Enter password"
      }
    }
    this.setState({
      errorMessage
    })
  }

  handleSubmit = () => {
    if (this.state.userName && this.state.userName.length > 0 && this.state.userPassword && this.state.userPassword === this.state.confirmUserPassword) {
      if (localStorage.userDataList) {
        let userDataList = JSON.parse(localStorage.userDataList)
        userDataList.forEach((ele) => {
          if (ele.userName === this.state.userName) {
            alert("user already exists")
            this.props.history.push("/Login")
          } else {
            alert("Sign-up succssfully")
            this.props.signupHandel(this.state.userName, this.state.userPassword)
            setTimeout(() => this.props.history.push("/Login"), 500)
          }
        })
      } else {
        alert("Sign-up succssfully")
        this.props.signupHandel(this.state.userName, this.state.userPassword)
        setTimeout(() => this.props.history.push("/Login"), 500)
      }
    } else {
      this.handelError()
    }
  }

  render() {
    return (
      <article className="log-form">
        <h2 className='page-heading'>Sign up</h2>
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="email">UserName:</label>
                        <div className="col-sm-10">
                            <input pattern="[A-Za-z]{3}" type="text" className="form-control" name='userName' id="email" placeholder="Enter UserName" value={this.state.userName} onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="pwd" name="userPassword" placeholder="Enter password" value={this.state.userPassword} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="pwd">Confirm Password:</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="pwdconf" name="confirmUserPassword" placeholder="Enter password" value={this.state.confirmUserPassword} onChange={this.onChange}/>
                        </div>
                    </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default" onClick ={this.handleSubmit}>Sign Up</button>
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
