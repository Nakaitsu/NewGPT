import styled from "styled-components"
import { variant } from "styled-system"

export const ButtonStyled = styled.a`
  display: inline-flex;
  align-items: center;
  padding: .4em 1em;
  border-radius: var(--small-radius);
  font-size: 1rem;
  border: none;
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
  }

  &:active {
    color: white;
  }

  &:visited {
    color: white;
  }

  ${variant({
    prop: 'colorType',
    variants: {
      primary: { 
        backgroundColor: 'var(--primary)', 
        color: 'var(--text-light)',
        '&:visited': {
          color: 'var(--text-light)'
        } 
      },
      secondary: {
        backgroundColor: '#aaaaaa',
        color: 'var(--text-dark)',
        '&:visited': {
          color: 'var(--text-dark)'
        }
      },
      dark: { 
        backgroundColor: 'var(--dm-purple-darken)', 
        color: 'var(--text-light)'
      },
      purple: {
        backgroundColor: 'var(--dm-purple)',
        color: 'var(--text-light)'
      },
      yellow: {
        backgroundColor: 'var(--dm-yellow)',
        color: 'var(--text-dark)'
      }
    } 
  })}

  ${variant({
    prop: 'size',
    variants: {
      sm: { 
        fontSize: '.8rem' 
      },
      md: {
        padding: '.6em 1.5em', 
        fontSize: '1.1rem' 
      }
    }
  })}

  ${variant({
    prop: 'widthType',
    variants: {
      fluid: {
        width: '100%',
        display: 'block',
        textAlign: 'center'
      }
    }
  })}
`