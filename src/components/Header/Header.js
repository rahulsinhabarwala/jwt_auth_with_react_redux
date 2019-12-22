import React, { Component } from 'react'

import jwt from 'jsonwebtoken';
export default class Header extends Component {

    logoutHandler = () => {
        delete localStorage['token'];
    }

    render() {
        const token = localStorage.token;
        let decoded = jwt.decode(token, {complete: true});
        console.log('decoded', decoded)
        return (
            <nav className="navbar navbar-light" onClick={this.logoutHandler} style={{"background-color": "#e3f2fd"}}>
                <a className="navbar-brand" href="">Logout</a>
            </nav>
        )
    }
}
