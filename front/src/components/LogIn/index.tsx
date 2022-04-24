import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { AppDispatch } from '../../store/configureStore';
import literals from '../../global/literals';
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
import useUser from '../../global/hooks/useUser';

const LogIn: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);
  const dispatch: AppDispatch = useDispatch();
  const { user } = useUser();
  const submitLogIn = () => {
    dispatch((fetchUser({
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    })));
  };

  useEffect(() => {
    if (!isEmpty(user)) {
      navigate('/');
    }
  }, [user]);

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
              type={literals.email.toLowerCase()}
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
            width={theme.buttonWidth.login}
            height={theme.buttonHeight.large}
            padding="15px 10px"
            onClick={togglePassword}
          />
          <Button
            text={literals.logIn}
            fontSize={theme.fontSize.medium}
            width={theme.buttonWidth.login}
            height={theme.buttonHeight.large}
            padding="15px 10px"
            onClick={submitLogIn}
          />
        </ButtonGroup>
      </LogInContent>
    </LogInContainer>
  );
};

export default LogIn;
