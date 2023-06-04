import React, { useState } from 'react';
import axios from 'axios';
import {Logo, StyledInput, StyledContainer, LeftPanel, RightPanel, LoginContainer, StyledForm, LoginButton, RegisterButton } from '../Auth/Auth.Styles';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckPasswordChange = (e) => {
    setCheckPassword(e.target.value);
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password || !checkPassword) {
      console.error('Please fill in all fields');
      return;
    }
  
    if (password !== checkPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const usernameExists = await axios.get(`/api/check-username/${username}`);
      if (usernameExists.data.exists) {
        console.error('Username already exists');
        return;
      }
  
      const emailExists = await axios.get(`/api/check-email/${email}`);
      if (emailExists.data.exists) {
        console.error('Email already exists');
        return;
      }
    } catch (error) {
      console.error('Failed to check username or email:', error);
      return;
    }

    const user = {
      name, 
      username, 
      email, 
      password, 
    };

    try {
      const response = await axios.post('http://localhost:5000/api/register', user);
      setRegistrationStatus({ success: true, message: response.data.message });
    } catch (error) {
      console.error('Failed to add user:', error);
      setRegistrationStatus({ success: false, message: 'Failed to add user' });
    }

    console.log('Cadastro enviado:', name, username, email, password, checkPassword);
  };
    

  return (
    <StyledContainer>
      <Logo />

      <LeftPanel>
        <LoginContainer>

          <h2 className="mb-sm">Crie sua conta!</h2>

          <StyledForm onSubmit={handleRegistrationSubmit}>
            
            <label>
              <StyledInput type="text" placeholder="Nome" value={name} onChange={handleNameChange} />
            </label>
            <label>
              <StyledInput type="text" placeholder="Nome de usuario" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
              <StyledInput type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
              <StyledInput type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
            </label>
            <label>
              <StyledInput type="password" placeholder="Repita sua senha" value={checkPassword} onChange={handleCheckPasswordChange} />
            </label>
            <br />
            <LoginButton type="submit">Concluir</LoginButton>

          </StyledForm>
        </LoginContainer>  
      </LeftPanel>

      <RightPanel>
        <h2 className='mb-sm'>
          Boas Vindas!
        </h2>
        <label className='mb-sm'>
        O Aldeia Senais está com tudo pronto para te para você poder desenvolver suas habildades junto a sua unidade acadêmica
        </label>
        <h2 className='mb-sm text-gray' >
          Já tem uma conta?
        </h2>
        <RegisterButton >
            Login
        </RegisterButton>
      </RightPanel>

    </StyledContainer>
  );
};

export default SignUpPage;
