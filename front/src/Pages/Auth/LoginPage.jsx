import React, { useState } from 'react';
import {Logo, StyledInput, StyledContainer, LeftPanel, RightPanel, LoginContainer, StyledForm, RoundButton, GoogleIcone, Line, TextWithLine, Text, LoginButton, RegisterButton }from './Auth.Styles'

const LoginPage = () => {
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
              <StyledInput type="text" placeholder="Email" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
              <StyledInput type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
            </label>
            <span
              className="forgot-password mb-sm ml-xs"
              style={{textDecoration: "underline", cursor: "pointer" }}
              onClick={handleForgotPasswordClick}
            >
            Esqueceu sua senha?
            </span>

           
            <LoginButton type="submit">Login</LoginButton>
          </StyledForm>
        </LoginContainer>  
      </LeftPanel>
      <RightPanel>
        <label className='mb-sm'>
          Primeira vez por aqui?
        </label>
        <label className='mb-sm'>
          Crie seu cadastro na plataforma e comece a praticar suas habilidades
        </label>
        <RegisterButton>Cadastrar</RegisterButton>
      </RightPanel>

    </StyledContainer>
  );
};

export default LoginPage;
