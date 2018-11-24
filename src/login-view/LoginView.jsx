import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { themes } from '../common/themes'
import {
  LoginViewWrapper,
  BrandLogoWrapper,
  InputGrouper,
  InputWrapper,
  Input,
  Button
} from './loginView.styles.js'

import brandLogo from '../assets/brand-logo.png'

export default class LoginView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    }
  }

  handleChange = (event, credintial) =>
    this.setState({
      [credintial]: event.target.value
    });

  render() {
    return (
      <ThemeProvider theme={themes.main}>
        <LoginViewWrapper>
          <BrandLogoWrapper>
            <img src={brandLogo}/>
          </BrandLogoWrapper>
          <InputGrouper>
            <InputWrapper>
              <p>login</p>
              <Input onChange={event => this.handleChange(event, 'login')} type="text"/>
            </InputWrapper>
            <InputWrapper>
              <p>password</p>
              <Input onChange={event => this.handleChange(event, 'password')} type="password"/>
            </InputWrapper>
          </InputGrouper>
          <Button>LOGIN</Button>
        </LoginViewWrapper>
      </ThemeProvider>
    )
  }
}