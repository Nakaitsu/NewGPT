import React from 'react'
import logo from '../../Assets/black-logo.png'
import { NavbarStyled, NavLink, NavLinkList, Brand, BrandWrapper } from './Navbar.Styles'
import { useLocation } from 'react-router-dom' 
import { useEffect, useState } from 'react'

const Navbar = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    let pathname = location.pathname.split('/')
    pathname.shift()
    setActiveTab(pathname[0])
    console.log(pathname)
  }, [activeTab])
  
  return (
    <NavbarStyled>
      <BrandWrapper>
        <Brand src={logo} />
      </BrandWrapper>
      <NavLinkList>
        <li>
          <NavLink disabled={true} href="#" active={false}>Home</NavLink>
        </li>
        <li>
          <NavLink href="/" active={activeTab.toLowerCase() === ''}>Atividades</NavLink>
        </li>
        <li>
          <NavLink disabled={true} href="#" active={activeTab.toLowerCase() === 'about'}>Sobre</NavLink>
        </li>
        <li>
          <NavLink disabled={true} href="#" active={activeTab.toLowerCase() === 'support'}>Suporte</NavLink>
        </li>
      </NavLinkList>
    </NavbarStyled>
  )
}

export default Navbar