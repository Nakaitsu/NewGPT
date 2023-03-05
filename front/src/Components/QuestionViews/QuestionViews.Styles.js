import styled from 'styled-components'

export const ViewsContainer = styled.div`
  display: flex;
  width: 100%;
`
  
export const Views = styled.div`
  display: flex;
  column-gap: 1em;
  width: 100%;
`

export const ViewLink = styled.a `
  font-size: 1.2rem;
  font-weight: 700;
  color: white;
  display: inline-block;
  padding: .45em 1.075em;
  text-decoration: none;
  border-radius: 26px;

  &:hover {
    background-color: var(--gray);
  }

  &.active {
    background-color: var(--green);
    color: white;
  }
`