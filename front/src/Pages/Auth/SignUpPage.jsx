import React, { useState } from 'react';
import {Logo, StyledInput, StyledContainer, LeftPanel, RightPanel, LoginContainer, StyledForm, RoundButton, GoogleIcone, Line, TextWithLine, Text, LoginButton, RegisterButton }from './Auth.Styles'

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleStyledFormSubmit = (e) => {
    e.preventDefault();
    
    console.log('Login submitted:', username, password);
  };

  const handleForgotPasswordClick = () => {
    console.log('Forgot your password clicked');
  };

  return (
    <StyledContainer>
      <Logo />

      <LeftPanel>
        <LoginContainer>

          <h2 className="mb-sm">Entrar na sua conta</h2>
          <h2 className="text-gray-lighter mb-sm">Entrar usando suas redes sociais</h2>

          <RoundButton className="mb-sm">
            <GoogleIcone />
          </RoundButton>

          <TextWithLine className="mb-sm">
            <Line />
              <Text>Ou</Text>
            <Line/>
          </TextWithLine>

          <StyledForm onSubmit={handleStyledFormSubmit}>
            
        
            <label>
              <StyledInput type="name" placeholder="Nome" value={password} onChange={handlePasswordChange} />
            </label>
            <label>
              <StyledInput type="username" placeholder="Nome de Usuário" value={password} onChange={handlePasswordChange} />
            </label>
            <label>
              <StyledInput type="text" placeholder="Email" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
              <StyledInput type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
            </label>
            <label>
              <StyledInput type="password" placeholder="Confirmar senha" value={password} onChange={handlePasswordChange} />
            </label>
             

            <LoginButton type="submit">Concluir</LoginButton>
          </StyledForm>
        </LoginContainer>  
      </LeftPanel>
      <RightPanel>
        <label className='mb-sm'>
          Boas Vindas!
        </label>
        <label className='mb-sm'>
          O Aldeia Senais está com tudo pronto para você desenvolver suas habilidades junto a sua entidade acadêmica
        </label>
      </RightPanel>

    </StyledContainer>
  );
};

export default SignUpPage;
