import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store/configureStore';
import literals from '../../config/literals';
import landscape from '../../assets/media/landscape.png';
import logInIcon from '../../assets/media/logInIcon.png';
import {
  LogInContainer, LogInContent, LoginIcon, LogInForm, LogInTitle, InputGroup, ButtonGroup,
} from './styles';
import Button from '../shared/Button';
import Input from '../shared/Input';
import theme from '../../styles/theme';
import { fetchUser } from '../../store/modules/user';
import { emailValidation } from '../../utils/emailValidation';
import { setEmailAndValidate } from '../../utils/setEmailAndValidate';

const LogIn: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch: AppDispatch = useDispatch();
  const submitLogIn = () => {
    dispatch((fetchUser({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    })));
    setIsLoading(true);
    setTimeout(() => {
      navigate('/character/list');
      setIsLoading(false);
    }, 500);
  };
  const togglePassword = () => {
    setShowPassword(!showPassword);
    setInputType(showPassword ? literals.password.toLowerCase() : literals.text.toLowerCase());
  };
  return (
    <LogInContainer background={landscape}>
      <LogInContent>
        <LogInTitle>{literals.logIn}</LogInTitle>
        <LogInForm>
          <LoginIcon src={logInIcon} alt="LogInIcon" />
          <InputGroup>
            <Input
              placeholder={literals.email}
              type="email"
              isValid={isValid}
              hasValue={email}
              onChange={(event) => {
                setEmailAndValidate(event.target.value, setEmail, emailValidation, setIsValid);
              }}
            />
            <Input
              placeholder={literals.password}
              type={inputType}

            />
          </InputGroup>
        </LogInForm>
        <ButtonGroup>
          <Button
            text={showPassword ? literals.hidePassword : literals.showPassword}
            fontSize={theme.fontSize.small}
            width={theme.buttonWidth.large}
            height={theme.buttonHeight.medium}
            padding="15px 10px"
            onClick={() => togglePassword()}
          />
          <Button
            text={isLoading ? literals.loading : literals.logIn}
            fontSize={theme.fontSize.medium}
            width={theme.buttonWidth.large}
            height={theme.buttonHeight.medium}
            padding="15px 10px"
            onClick={() => submitLogIn()}
          />
        </ButtonGroup>
      </LogInContent>
    </LogInContainer>
  );
};

export default LogIn;
