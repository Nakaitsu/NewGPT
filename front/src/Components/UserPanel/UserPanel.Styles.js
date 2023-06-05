import styled from "styled-components"

export const UserContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: .5rem;
`

export const UserPhoto = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 16px;
  display: inline-block;
`

export const UserName = styled.a`
  display: inline-block;
  font-size: 1.215rem;
  text-decoration: none;
  color: white;
`