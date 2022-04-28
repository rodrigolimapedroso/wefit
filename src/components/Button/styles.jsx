import styled from 'styled-components';

export const ButtonCircle = styled.button`
  background: ${props => props.theme.colors.green};
  height: 48px;
  width: 48px;
  color: ${props => props.theme.colors.white};
  padding: 1rem;
  border: none;
  cursor: pointer;
  font-size: 27px;
  border: 0px solid ${props => props.theme.colors.white};
  border-radius: 50%;
  padding: 12px;

`;