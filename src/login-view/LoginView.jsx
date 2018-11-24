import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LoginView extends Component {
  render() {
    return (
      <div>
        <p>Login View</p>
        <Link to="/index">Index</Link>
      </div>
    )
  }
}