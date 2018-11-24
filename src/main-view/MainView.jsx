import React, { Component } from 'react'
import {
  MainViewWrapper,
  BrandLogoWrapper,
  MainButtonsGroup
} from './mainView.styles.js'
import Button from '../common/Button.style.js'
import BrandLogo from '../assets/brand-logo.png'

export default class MainView extends Component {
  render() {
    return (
      <MainViewWrapper>
        <BrandLogoWrapper>
          <img src={BrandLogo}/>
        </BrandLogoWrapper>
        <MainButtonsGroup>
          <Button>PROFILE</Button>
          <Button>FIND A TEACHER</Button>
        </MainButtonsGroup>
        <Button>LOGOUT</Button>
      </MainViewWrapper>
    )
  }
}