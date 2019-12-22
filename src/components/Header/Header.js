import React, { Component } from 'react'

import jwt from 'jsonwebtoken';
export default class Header extends Component {

  logoutHandler = () => {
    delete localStorage['token'];
  }

  render() {
    const token = localStorage.token;
    let decoded = jwt.decode(token, {
      complete: true
    });
    return (
      <nav className="navbar navbar-light">
                <span className='user-name'>{decoded && decoded.payload.data}</span>
                <a  className="navbar-brand" href="/Login" onClick={this.logoutHandler}><span>Logout</span></a>
      </nav>
    )
  }
}
