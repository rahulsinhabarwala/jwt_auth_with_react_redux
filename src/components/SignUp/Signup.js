import React, { Component } from 'react'
import {Route,Link, Redirect} from 'react-router-dom';
import Homepage from '../HomePage/Homepage';
export default class Signup extends Component {
    state = {
            userName: '',
            userPassword: '',
            confirmUserPassword: '',
            isSignupSuccess: false,
            errorMessage: ""
        }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = () => {
        if(this.state.userPassword === this.state.confirmUserPassword){
            this.setState({
                isLoginInitiated: true,
            })
            this.props.signupHandel(this.state.userName, this.state.userPassword)
            // this.props.history.push("/Login")
        }else{
            this.setState({errorMessage: "password not match"})
        }
    }   
    render() {
        return (
            <section>
                name:<input placeholder='enter name' name="userName"  value={this.state.userName} onChange={this.onChange}/>
                password:<input placeholder='enter password' name="userPassword" value={this.state.userPassword} onChange={this.onChange}/>
                confirm password:<input placeholder='re-enter password' name="confirmUserPassword" value={this.state.confirmUserPassword} onChange={this.onChange}/>
                <button id="b1" onClick ={this.handleSubmit}>Click me</button>
            </section>
        )
    }
}
