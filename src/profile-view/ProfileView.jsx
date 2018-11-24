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
  ProfilePicture,
  ProfileLowerView,
  Section,
  SectionTitle,
  SectionContent,
  BottomBar
} from './profileView.styles.js'
import Button from '../common/Button.style.js'
import ProfileIcon from '../assets/profileIcon.png'
import DistanceIcon from '../assets/distance.png'
import SalaryIcon from '../assets/money.png'
import RewardIcon from '../assets/reward.png'
export default class ProfileView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subjects: null,
      selectedSubject: null
    }
  }

  selectSubject = subject => this.setState({ selectedSubject: subject });

  componentDidMount() {
    this.setState({
      subjects: ['mathematics', 'physics', 'IT']
    })
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
        <ProfileLowerView>
          <Section>
            <SectionTitle>BIO</SectionTitle>
            <SectionContent>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur cursus libero, ut malesuada augue tristique ac.
              Aenean dignissim suscipit sapien, hendrerit semper eros mollis tincidunt. Quisque non mattis tortor."
            </SectionContent>
          </Section>
          <Section>
            <SectionTitle>WHAT I CAN HELP YOU WITH</SectionTitle>
            <SectionContent>
              {
                this.state.subjects !== null ?
                ['mathematics', 'physics', 'IT'].map(e => <Button type={{ margin: 'marginTop'}} isActive={e === this.state.selectedSubject} onClick={() => this.selectSubject(e)}>{e}</Button>) : null
              }
            </SectionContent>
          </Section>
        </ProfileLowerView>
        <BottomBar>
          <Button onClick={() => this.props.history.push('/index')}>BACK</Button>
          <Button>CATCH UP!</Button>
        </BottomBar>
      </ProfileViewWrapper>
    )
  }
}