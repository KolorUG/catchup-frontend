import React, { Component } from 'react'
import {
  LoginViewWrapper,
  BrandLogoWrapper,
  InputGrouper,
  InputWrapper,
  InputLabel,
  InputError,
  Input,
  Button
} from './loginView.styles.js'

import brandLogo from '../assets/brand-logo.png'

export default class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      wasSubmittedOnce: false
    }
  }

  handleChange = (event, credintial) =>
    this.setState({
      [credintial]: event.target.value
    });

  handleSubmit = () => {
    this.setState({
      wasSubmittedOnce: true
    });

  };

  render() {
    return (
        <LoginViewWrapper>
          <BrandLogoWrapper>
            <img src={brandLogo}/>
          </BrandLogoWrapper>
          <InputGrouper>
            <InputWrapper>
              <InputLabel>login</InputLabel>
              <Input onChange={event => this.handleChange(event, 'login')} type="text"/>
              {
                this.state.wasSubmittedOnce && (this.state.login.length < 5 || this.state.login.length > 30) ?
                  <InputError>Login is too {this.state.login.length < 5 ? 'short' : this.state.login.length > 30 ? 'long' : null}</InputError> : null
              }
            </InputWrapper>
            <InputWrapper>
              <InputLabel>password</InputLabel>
              <Input onChange={event => this.handleChange(event, 'password')} type="password"/>
              {
                this.state.wasSubmittedOnce && (this.state.password.length < 6 || this.state.password.length > 18) ?
                  <InputError>Password is too {this.state.password.length < 6 ? 'short' : this.state.password.length > 18 ? 'long' : null}</InputError> : null
              }
            </InputWrapper>
          </InputGrouper>
          <Button onClick={() => this.handleSubmit()}>LOGIN</Button>
        </LoginViewWrapper>
    )
  }
}