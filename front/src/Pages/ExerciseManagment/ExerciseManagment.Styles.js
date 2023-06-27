import styled from "styled-components";

export const lnkButton = styled.a`
  display: inline-block;
  color: ${props => props.color ? props.color : 'unset'};
  text-decoration: none;
`