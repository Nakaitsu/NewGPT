import styled from 'styled-components'
import { variant } from 'styled-system'

export const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: var(--dm-darken);
  border-right: 1px solid #1f435c;
`

export const BrandWrapper = styled.div`
  flex: 0;
  width: 100%;
`

export const Brand = styled.img`
  width: 120px;
  height: 75px;
`

export const NavLinkList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 1.45em;
  justify-content: center;
  align-items: center;
  padding-left: .75em;
  padding-right: .75em;

  li {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
`

export const NavLink = styled.a`
  display: inline-block;
  width: 100%;
  padding: .35em .55em;
  border-radius: 16px;
  color: white;
  font-size: 1.275rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: var(--primary);
    color: var(--dark-grey);
  }

  ${variant({
    prop: 'active',
    variants: {
      true: { backgroundColor: 'var(--primary)' }
    }
  })}

  ${variant({
    prop: 'disabled',
    variants: {
      true: { 
        color: 'var(--dm-grey)',
        '&:hover': {
          backgroundColor: 'transparent',
          color: 'var(--dm-grey)'
        }
      }
    }
  })}
`