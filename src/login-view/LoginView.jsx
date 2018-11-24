import React, { Component } from 'react'
import {
  LoginViewWrapper,
  BrandLogoWrapper,
  InputGrouper,
  InputWrapper,
  InputLabel,
  InputError,
  Input
} from './loginView.styles.js'
import Button from '../common/Button.style.js'
import auth from '../common/auth.js'

import brandLogo from '../assets/brand-logo.png'

export default class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      wasSubmittedOnce: false,
      isSubmitting: false
    }
  }

  handleChange = (event, credintial) =>
    this.setState({
      [credintial]: event.target.value
    });

  handleSubmit = () => {
    this.setState({
      wasSubmittedOnce: true,
      isSubmitting: true,
    });

    if (this.state.password.length < 6 || this.state.password.length > 18) {
      this.setState({
        isSubmitting: false
      });
      return;
    }
    if (this.state.password.length < 6 || this.state.password.length > 18) {
      this.setState({
        isSubmitting: false
      });
      return;
    }

    auth.authenticate(this.goToIndex);
  };

  goToIndex = () => this.props.history.push('/index');

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
          <Button type={{ font: 'fontRegular' }} isActive={this.state.isSubmitting} onClick={() => this.handleSubmit()}>{!this.state.isSubmitting ? 'LOGIN' : 'logging in...'}</Button>
        </LoginViewWrapper>
    )
  }
}