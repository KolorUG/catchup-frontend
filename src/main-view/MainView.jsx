import React, { Component } from 'react'
import {
  MainViewWrapper,
  BrandLogoWrapper,
  MainButtonsGroup
} from './mainView.styles.js'
import auth from '../common/auth.js'
import Button from '../common/Button.style.js'
import BrandLogo from '../assets/brand-logo.png'

export default class MainView extends Component {

  handleSignout() {
    auth.signout();
    this.props.history.push('/login')
  }

  render() {
    return (
      <MainViewWrapper>
        <BrandLogoWrapper>
          <img src={BrandLogo}/>
        </BrandLogoWrapper>
        <MainButtonsGroup>
          <Button onClick={() => this.props.history.push('/profile')}>PROFILE</Button>
          <Button>FIND A TEACHER</Button>
        </MainButtonsGroup>
        <Button onClick={() => this.handleSignout()}>LOGOUT</Button>
      </MainViewWrapper>
    )
  }
}