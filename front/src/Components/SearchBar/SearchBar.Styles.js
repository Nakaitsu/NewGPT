import styled from "styled-components"

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  color: white;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #a5a5a5;
    font-style: italic;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: .55em 1.45em;
  border-radius: var(--default-radius);
  background-color: var(--dm-grey-lighten);
`