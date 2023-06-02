import React from 'react'
import { NavbarStyled, NavLink, NavLinkList, Brand, BrandWrapper } from './Navbar.Styles'

const Navbar = () => {
  return (
    <NavbarStyled>
      <BrandWrapper>
        <Brand />
      </BrandWrapper>
      <NavLinkList>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Atividades</NavLink>
        <NavLink href="#">Sobre</NavLink>
        <NavLink href="#">Suporte</NavLink>
      </NavLinkList>
    </NavbarStyled>
  )
}

export default Navbar