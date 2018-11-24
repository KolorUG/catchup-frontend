import styled from 'styled-components'

const LoginViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
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

const InputGrouper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 53%;
`;

const InputLabel = styled.p`
  padding: 0 14px;
`;

const InputWrapper = styled.div`
  margin: 0 auto;
  padding-top: 28px;
`;

const InputError = styled.p`
  padding: 4px 14px 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.errorColor}
`;

const Input = styled.input`
  width: 100%;
  padding: 3% 14px; 
  font-size: 1.5rem;
  background: none;
  border-radius: 28px;
  border: 2px solid ${({ theme }) => theme.borderColor}; 
  text-align: center;
  outline: 0;
  ::placeholder
    color: ${({ theme }) => theme.fontColor};
`;

const Button = styled.button`
  padding: 2.5% 7%;
  background: none;
  border-radius: 17px;
  border: 2px solid ${({ theme, isSubmitting }) => !isSubmitting ? theme.borderColor : theme.submittingColor}; 
  font-size: 1.5rem;
  color: inherit;
  background-color: ${({ theme, isSubmitting }) => isSubmitting === true ? theme.submittingColor : ''};
  outline: 0;
  transition: 0.125s ease-in-out;
  
  @media screen and (min-width: 800px) {
    padding: 2% 4%;
  }
  
  @media screen and (min-width: 1200px) {
    padding: 1% 2%;
  }
`;

export { LoginViewWrapper, BrandLogoWrapper, InputError, InputLabel, InputGrouper, InputWrapper, Input, Button };