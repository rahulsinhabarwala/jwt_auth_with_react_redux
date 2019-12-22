import React, { Component } from 'react'

export default class Login extends Component {
    state = {
        userName: '',
        userPassword: '',
        isLoggedIn: false
    }

onChange = e => this.setState({ [e.target.name]: e.target.value })

handleSubmit = () => {
        this.setState({
            isLoginInitiated: true,
        }, () => {this.props.loginHandle(this.state.userName, this.state.userPassword)})
}
render() {
    return (
        <div class="log-form">
        <section>
            name:<input placeholder='enter name' name="userName"  value={this.state.userName} onChange={this.onChange}/>
            password:<input placeholder='enter password' name="userPassword" value={this.state.userPassword} onChange={this.onChange}/>
            <button id="b1" onClick ={this.handleSubmit}>Click me</button>
        </section>
        </div>
        
        
    )
}
}

