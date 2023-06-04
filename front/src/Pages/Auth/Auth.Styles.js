import styled from "styled-components";
import { Container } from "../../Assets/Components";
import { ReactComponent as LogoAldeia } from '../../Assets/images/AldeiaSenaiLogo.svg'
import { ReactComponent as GoogleIcon } from '../../Assets/images/GoogleIcon.svg'

export const GoogleIcone = styled(GoogleIcon) `
height: 100%;
width: 100%;
`

export const Logo = styled(LogoAldeia)`
width: 150px;
height:100px;
`;

export const StyledForm = styled.form`
  width: 100%;
  padding-top:20px;
  display:flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledInput = styled.input`
  border-radius: 50px;
  background-color: #eaeaea;
  padding: 10px;
  border: none;
  outline: none;
  width: 100%;
  margin-bottom: 10px;
`;

export const ComboBox = styled.select`
  border-radius: 50px;
  background-color: #eaeaea;
  padding: 10px;
  border: none;
  outline: none;
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const StyledContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #FFFFFF;
`;

export const LeftPanel = styled.div`
  flex: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RightPanel = styled.div`
  flex: 40%;
  background-color: #629A34;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

export const LoginContainer = styled.div`
 width: 100%;
 height: 80%;
 padding-right: 100px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

export const RoundButton = styled.button`
border-radius: 50%;
background-color: #ffffff;
padding: 10px;
border: none;
outline: none;
width: 50px;
height: 50px;
margin-bottom: 10px;
display: flex;
justify-content: center;
align-items: center;
transition: box-shadow 0.3s ease;


&:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
`;

export const TextWithLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  width: 45%;
  padding: 2px;
  flex-grow: 1;
  border-bottom: 2px solid var(--lighter-gray);
`;

export const Text = styled.span`
  margin: 0 10px;
`;

export const LoginButton = styled.button`
  width: 50%;
  margin: 0 auto;
  background-color: #04ADDC;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

// Register button
export const RegisterButton = styled.button`
  width: 60%;
  background-color: #0A5A3B;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-bottom: 10px;
`;