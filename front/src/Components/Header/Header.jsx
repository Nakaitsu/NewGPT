import React from 'react'
import { Container } from '../../Assets/Components'
import AldeiaSenaiLogo from '../../Assets/images/AldeiaSenaiLogo.png'
import { LoginContainer, LogoContainer, NavLink, Nav, HeaderContainer, Logo, SearchBarContainer, LoginButton, SearchInput } from './Header.Styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Container className="flex">
        <LogoContainer>
          <Logo src={AldeiaSenaiLogo} alt="" /> 
        </LogoContainer>

        <Nav>
          <NavLink href="">Questoes</NavLink>
          <NavLink href="">Comunidade</NavLink>
        </Nav>

        <SearchBarContainer>
          <SearchInput type="search" autoComplete={false} />
        </SearchBarContainer>

        <LoginContainer>
          <LoginButton href="">Sign In</LoginButton>
        </LoginContainer>
      </Container>
    </HeaderContainer>
  )
}

export default Header