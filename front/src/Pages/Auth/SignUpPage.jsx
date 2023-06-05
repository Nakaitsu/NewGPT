import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Logo, StyledInput, StyledContainer, LeftPanel, RightPanel, LoginContainer, StyledForm, LoginButton, RegisterButton, ErrorMessage } from '../Auth/Auth.Styles';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState({
    success: false,
    message: ''
  });

  const navigate = useNavigate();

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
      setErrorMessage('Por favor preencha todos os campos.');
      return;
    }

    if (password !== checkPassword) {
      setErrorMessage('Senhas não coincidem.');
      return;
    }

    try {
      const usernameExists = await axios.get(`http://localhost:5000/api/register/check-username/${username}`);
      if (usernameExists.data.exists) {
        setErrorMessage('Nome de usuário já está sendo utilizado!');
        return;
      }

      const emailExists = await axios.get(`http://localhost:5000/api/register/check-email/${email}`);
      if (emailExists.data.exists) {
        setErrorMessage('Esse email já existe! Ele é seu? Log In');
        return;
      }
    } catch (error) {
      console.error('Failed to check username or email:', error);
      setErrorMessage('Erro ao checar nome de usuário e email');
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
      navigate('/exercise');
      setErrorMessage('');
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
              <StyledInput type="text" placeholder="Nome de usuário" value={username} onChange={handleUsernameChange} />
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
            {errorMessage && <ErrorMessage className='ml-xs'>{errorMessage}</ErrorMessage>}
            <br />
            <LoginButton type="submit">Cadastrar-se</LoginButton>
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
        <RegisterButton onClick={() => navigate('/login')}>
          Login
        </RegisterButton>
      </RightPanel>
    </StyledContainer>
  );
};

export default SignUpPage;
