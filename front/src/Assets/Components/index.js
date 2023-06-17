import styled from "styled-components";
import { variant } from 'styled-system'

export const Container = styled.div`
  width: 94.3%;
  margin: 0 auto;

  &.flex {
    display: flex;
  }
`

export const ContentBlock = styled.div`
  margin: 1em 0;
`

export const Button = styled.a`
  display: inline-block;
  padding: .4em 1em;
  border-radius: 7px;
  font-size: 1rem;
  border: none;
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
  }

  ${variant({
    prop: 'colorType',
    variants: {
      primary: { 
        backgroundColor: 'var(--primary)', 
        color: 'var(--text-light)' 
      },
      secondary: {
        backgroundColor: '#aaaaaa',
        color: 'var(--text-dark)'
      }
      ,
      dark: { 
        backgroundColor: 'var(--dm-purple-darken)', 
        color: 'var(--text-light)'
      },
      purple: {
        backgroundColor: 'var(--dm-purple)',
        color: 'var(--text-light)'
      }
    } 
  })}

  ${variant({
    prop: 'size',
    variants: {
      sm: { 
        padding: '.4em 1em', 
        fontSize: '1rem' 
      },
      md: {
        padding: '.6em 1.5em', 
        fontSize: '1.1rem' 
      }
    }
  })}
`