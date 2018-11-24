import styled from 'styled-components'

const ProfileViewWrapper = styled.div`
  padding: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

const ProfileTopView = styled.div`
  display: flex;
`;

const ProfileIconWrapper = styled.div`
  width: 128px;
  height: 128px;
  
  & > img {
    height: 100%;
  }
  
  @media screen and (min-width: 800px) {
     width: 194px;
     height: 194px;
   }

  @media screen and (min-width: 1200px) {
    width: 256px;
    height: 256px;
  }
`;

const CrucialInfo = styled.div`
  margin-left: 16px;
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
`;

export { ProfileViewWrapper, ProfileTopView, ProfileIconWrapper, CrucialInfo, Title, Subtitle, SubInfo, Symbol};