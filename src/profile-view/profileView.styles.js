import styled from 'styled-components'

const ProfileViewWrapper = styled.div`
  padding: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  
  @media screen and (min-width: 800px) {
    padding: 24px;
  }
  
  @media screen and (min-width: 1200px) {
    padding: 32px;
  }
`;

const ProfileTopView = styled.div`
  display: flex;
`;

const ProfileIconWrapper = styled.div`
  position: relative;
  width: 128px;
  height: 128px;
  
  @media screen and (min-width: 800px) {
     width: 194px;
     height: 194px;
   }

  @media screen and (min-width: 1200px) {
    width: 256px;
    height: 256px;
  }
`;

const ProfilePicture = styled.img`
  height: 100%;
`;

const Reward = styled.img`
  position: absolute;
  bottom: -16px;
  right: 8px;
  height: 32px;
  width: 21px;
  
  @media screen and (min-width: 800px) {
     height: 48px;
     width: 32px;
     bottom: -24px;
   }

  @media screen and (min-width: 1200px) {
    height: 64px 
    width: 42px;
    bottom: -32px;
  }
`;

const CrucialInfo = styled.div`
  margin-left: 16px;
  @media screen and (min-width: 800px) {
    flex: 1 0 30%;
  }
`;

const Title = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 1.25rem;
  
  @media screen and (min-width: 800px) {
    font-size: 1.875rem;
  }
  
  @media screen and (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-style: italic;
  font-weight: 100;
`;

const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Symbol = styled.div`
  display: flex;
  height: 32px;
  align-items: center;
  color: ${({ theme }) => theme.fontColor};
  font-weight: 100;
  padding-right: 16px;
  margin-top: 16px;
  
  & > img {
    height: 100%;
    width: auto;
    margin-right: 8px;
  }
  
  @media screen and (min-width: 800px) {
    flex: 1 0 51%;
  }
`;

const ProfileLowerView = styled.div`
  margin-top: 16px;
  ${({ desktop }) => desktop === true ? `
  display: flex;
  justify-content: space-between;
  ` : null}
`;

const Section = styled.div`
  color: ${({ theme }) => theme.fontColor};
  margin-bottom: 16px;
  width: ${({ type }) => type && type.width ? type.width : '100%'}
`;

const SectionTitle = styled.p`
  font-weight: 400;
  margin-bototm: 4px;
  opacity: 0.33;
  margin-bottom: 8px;
  
  @media screen and (min-width: 800px) {
    font-size: 1.5rem;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.white};
  font-weight: 100;
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 16px;
  left: 10%;  
  width: 80%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.fontColor};
  
  @media screen and (min-width: 1200px) {
    width: 25%;
    left: 37.5%;
  }
`;

export {
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
  SectionContent,
  SectionTitle,
  BottomBar };