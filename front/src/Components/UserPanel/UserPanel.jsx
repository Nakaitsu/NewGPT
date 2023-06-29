import React, { useEffect, useState } from 'react'
import { UserContainer, UserPhoto, UserName, Wrapper } from './UserPanel.Styles'
import UserService from '../../Services/UserService'

const UserPanel = ({className}) => {  
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    loadUserData()
  }, [])

  const loadUserData = async () => {
    let foundUser = await UserService.getUser()
    console.log(foundUser)

    if(foundUser) {
      setIsLogged(true)
      setUser(foundUser)
    }
  }

  return (
    <>
      {isLogged && (<UserContainer className={className}>
        <Wrapper>
          <UserPhoto src="https://placehold.co/45x45" />
          <UserName href="#">{user.username}</UserName>
        </Wrapper>
      </UserContainer>)}
    </>
  )
}

export default UserPanel