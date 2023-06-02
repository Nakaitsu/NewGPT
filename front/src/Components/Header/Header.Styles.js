import styled from "styled-components";
import { Container } from "../../Assets/Components";
import { ReactComponent as LogoAldeia } from '../../Assets/images/AldeiaSenaiLogo.svg'

export const Logo = styled(LogoAldeia) `
height: 80%;
width: 60%;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding-top: .55rem; 
  padding-bottom: .55rem; 
  background-color: var(--blue-darken);
  color: white;

  ${Container}.flex {
    align-items: center;
  }
`

export const LogoContainer = styled.div`
  font-size: 1.4em;
  flex-basis: 15%;
  color: var(--orange);
`

export const Nav = styled.nav`
  display: flex;
  column-gap: .3em;
  flex-basis: 25%;
`

export const NavLink = styled.a`
  font-size: 1rem;
  padding: .545em 1em;
  text-decoration: none;
  color: white;
`

export const SearchBarContainer = styled.div`
  flex: 2;
  padding-left: 1rem;
  padding-right: 1rem;

  input[type="search"],
  input[type="text"] {
    width: 100%;
  }
`

export const SearchInput = styled.input`
  font-size: 1rem;
  padding: .35em .75em;
  background: none;
  border: 1px solid white;
  border-radius: 7px;
  color: white;

  &:focus {
    outline: none;
  }
`

export const LoginContainer = styled.div`
  flex-basis: 10%;
  padding-left: .6em; 
  padding-right: .6em; 
`

export const LoginButton = styled.a`
  font-size: 1.125rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  background-color: var(--green);
  padding: .5em 1.25em;
  border-radius: 10px;
`