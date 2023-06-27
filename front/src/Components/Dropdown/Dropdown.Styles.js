import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
`

export const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 10px );
  left: calc(50% - 90px);
  width: 180px;
  padding: .7rem .35rem;
  border-radius: 16px;
  background-color: var(--dm-purple-darken);
  z-index: 5;

  &.enabled { 
    display: flex;
    flex-direction: column;
    row-gap: 2px; 
  }
`

export const DropdownItem = styled.a`
  padding: .45em .75em;
  color: white;
  text-decoration: none;
  border-radius: 7px;

  &:hover{
    background-color: var(--dm-grey);
  }
`