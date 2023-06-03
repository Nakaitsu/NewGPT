import React, { useState } from 'react';
import {Logo, StyledInput, StyledContainer, LeftPanel, RightPanel, LoginContainer, StyledForm, LoginButton, RegisterButton, ComboBox }from './Auth.Styles'

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [job, setJob] = useState('')
  const [jobOptions] = useState(['Professor', 'Estudante']);
  
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
  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const handleStyledFormSubmit = (e) => {
    e.preventDefault();
    
    console.log('Cadastro enviado:', email, password);
  };

  return (
    <StyledContainer>
      <Logo />

      <LeftPanel>
        <LoginContainer>

          <h2 className="mb-sm">Crie sua conta!</h2>

          <StyledForm onSubmit={handleStyledFormSubmit}>
            
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
            <label>
              <ComboBox value={name} onChange={handleJobChange}>
                <option value="job">Selecione seu cargo</option>
                {jobOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </ComboBox>
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
