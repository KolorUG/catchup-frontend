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
`;

const InputGrouper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 53%;
`;

const InputWrapper = styled.div`
  margin: 0 auto;
  padding-top: 12%;
  & > p {
    padding: 0 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 5% 14px; 
  background: none;
  border-radius: 28px;
  border: 1px solid ${({ theme }) => theme.borderColor}; 
  text-align: center;
  outline: 0;
  ::placeholder
    color: ${({ theme }) => theme.fontColor};
`;

const Button = styled.button`
  padding: 2.5% 7%;
  background: none;
  border-radius: 17px;
  border: 2px solid ${({ theme }) => theme.borderColor}; 
  font-size: 1.5rem;
  color: inherit;
`;

export { LoginViewWrapper, BrandLogoWrapper, InputGrouper, InputWrapper, Input, Button };