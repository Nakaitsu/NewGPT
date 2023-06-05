import React from 'react'
import { NavbarStyled, NavLink, NavLinkList, Brand, BrandWrapper } from './Navbar.Styles'

const Navbar = () => {
  return (
    <NavbarStyled>
      <BrandWrapper>
        <Brand />
      </BrandWrapper>
      <NavLinkList>
        <li>
          <NavLink href="#">Home</NavLink>
        </li>
        <li>
          <NavLink href="#">Atividades</NavLink>
        </li>
        <li>
          <NavLink href="#">Sobre</NavLink>
        </li>
        <li>
          <NavLink href="#">Suporte</NavLink>
        </li>
      </NavLinkList>
    </NavbarStyled>
  )
}

export default Navbar