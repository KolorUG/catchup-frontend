import React, { Component } from 'react'
import {
  ProfileViewWrapper,
  ProfileTopView,
  ProfileIconWrapper,
  CrucialInfo,
  Title,
  Subtitle,
  SubInfo,
  Symbol,
  Reward,
  ProfilePicture
} from './profileView.styles.js'
import ProfileIcon from '../assets/profileIcon.png'
import DistanceIcon from '../assets/distance.png'
import SalaryIcon from '../assets/money.png'
import RewardIcon from '../assets/reward.png'
export default class ProfileView extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ProfileViewWrapper>
        <ProfileTopView>
        <ProfileIconWrapper>
          <ProfilePicture src={ProfileIcon}/>
          <Reward src={RewardIcon}/>
        </ProfileIconWrapper>
        <CrucialInfo>
          <Title>Sad cate</Title>
          <Subtitle>teacher</Subtitle>
          <SubInfo>
            <Symbol >
              <img src={SalaryIcon}/>
              <p>15$</p>
            </Symbol>
            <Symbol text="<2km">
              <img src={DistanceIcon}/>
              <p>&lt;2km</p>
            </Symbol>
          </SubInfo>
        </CrucialInfo>
        </ProfileTopView>
      </ProfileViewWrapper>
    )
  }
}