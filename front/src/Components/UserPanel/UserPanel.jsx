import React from 'react'
import { UserContainer, UserPhoto, UserName, Wrapper } from './UserPanel.Styles'

const UserPanel = ({className}) => {
  return (
    <UserContainer className={className}>
      <Wrapper>
        <UserPhoto src="https://placehold.co/45x45" />
        <UserName href="#">Usuario78</UserName>
      </Wrapper>
    </UserContainer>
  )
}

export default UserPanel