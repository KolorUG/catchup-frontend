import styled from 'styled-components'

const Button = styled.button`
  padding: 8px 16px;
  background: none;
  border-radius: 17px;
  border: 2px solid ${({ theme, isSubmitting }) => !isSubmitting ? theme.borderColor : theme.submittingColor}; 
  font-size: 1.5rem;
  color: inherit;
  background-color: ${({ theme, isSubmitting }) => isSubmitting === true ? theme.submittingColor : ''};
  outline: 0;
  transition: 0.125s ease-in-out;
  font-weight: ${({ theme, type }) => type && type.font ? theme[type.font] : theme.fontThin} 
  
  @media screen and (min-width: 800px) {
    padding: 12px 24px;
  }
  
  @media screen and (min-width: 1200px) {
    padding: 18px 32px; 
  }
`;

export default Button;