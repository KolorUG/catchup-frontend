import styled from 'styled-components'

const MainViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  color: ${({ theme }) => theme.fontColor};
`;

const BrandLogoWrapper = styled.div`
  width: 75%;
  
  & > img {
    width: 100%;
    height: 100%;
  }
 
  @media screen and (min-width: 800px) {
    width: 60%;
  }
 
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

const MainButtonsGroup = styled.div`
  width: 80%;
  
  & > button {
    display: block;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  
  @media screen and (min-width: 800px) {
    width: 65%;
  }
 
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;



export { MainViewWrapper, BrandLogoWrapper, MainButtonsGroup };