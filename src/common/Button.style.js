import styled from 'styled-components'

const Button = styled.button`
  padding: 8px 16px;
  background: none;
  border-radius: 17px;
  border: 2px solid ${({ theme, isActive }) => !isActive ? theme.borderColor : theme.submittingColor}; 
  font-size: 1.5rem;
  color: inherit;
  background-color: ${({ theme, isActive }) => isActive === true ? theme.submittingColor : ''};
  outline: 0;
  transition: 0.125s ease-in-out;
  font-weight: ${({ theme, type }) => type && type.font ? theme[type.font] : theme.fontThin} 
  margin: ${({ theme, type }) => type && type.margin ? theme[type.margin] : '0'}
  
  @media screen and (min-width: 800px) {
    padding: 12px 24px;
  }
  
  @media screen and (min-width: 1200px) {
    padding: 18px 32px; 
  }
`;

export default Button;