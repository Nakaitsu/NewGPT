import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Logo,
  StyledInput,
  StyledContainer,
  LeftPanel,
  RightPanel,
  LoginContainer,
  StyledForm,
  RoundButton,
  GoogleIcone,
  Line,
  TextWithLine,
  Text,
  LoginButton,
  RegisterButton
} from '../Auth/Auth.Styles';
import loginUser from './LoginUser';
import SignUpPage from './SignUpPage';
// import { response } from 'express';

const LoginPage = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


    // const handleSubmit = async e => {
    //   e.preventDefault();
    //   const token = loginUser({
    //     email,
    //     password
    //   });
    //   setToken(token);

    // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser({
        email,
        password
      });
      setToken(token);
      
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      setToken(response.data);
      setID(user.id);
      const { user } = response.data;
      console.log('Login successful:', user);
      
    } catch (error) {
      console.error('Failed to login:', error);
    }
    

    console.log('Login submitted:', email, password);
  };

  const handleForgotPasswordClick = () => {
    console.log('Forgot your password clicked');
  };

  const loadSignup = () => {
    return <SignUpPage />
  }

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

          <StyledForm onSubmit={handleSubmit}>
          <TextWithLine className="mb-sm">
            <Line />
            <Text>Ou</Text>
            <Line />
          </TextWithLine>
            <label>
              <StyledInput type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
            </label>
            <label>
              <StyledInput type="password" placeholder="Senha" value={password} onChange={handlePasswordChange} />
            </label>
            <span
              className="forgot-password mb-sm ml-xs"
              style={{ textDecoration: "underline", cursor: "pointer" }}
              onClick={handleForgotPasswordClick}
            >
              Esqueceu sua senha?
            </span>
            <LoginButton type="submit">Login</LoginButton>
          </StyledForm>
        </LoginContainer>
      </LeftPanel>

      <RightPanel>
        <h2 className='mb-sm'>
          Primeira vez por aqui?
        </h2>
        <label className='mb-sm'>
          Crie seu cadastro na plataforma e comece a praticar suas habilidades
        </label>
        <RegisterButton onClick={loadSignup}>Cadastrar</RegisterButton>
      </RightPanel>

    </StyledContainer>
  );
};

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LoginPage;
