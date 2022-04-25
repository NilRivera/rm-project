import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { setPasswordDebounce } from '../../utils/setPasswordDebounce';
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
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);
  const dispatch: AppDispatch = useDispatch();
  const { user } = useUser();
  const submitLogIn = () => {
    dispatch((fetchUser({
      email,
      password,
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
          <LoginIcon src={logInIcon} alt={literals.loginAlt} />
          <InputGroup>
            <Input
              placeholder={literals.email}
              type={literals.email.toLowerCase()}
              isValid={isValid}
              hasValue={email}
              onChange={(event) => {
                setEmailAndValidate(
                  event.target.value,
                  setEmail,
                  emailValidation,
                  setIsValid,
                );
              }}
            />
            <Input
              placeholder={literals.password}
              type={inputType}
              onChange={(event) => setPasswordDebounce(event.target.value, setPassword)}
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
            disabled={!isValid}
            onClick={submitLogIn}
          />
        </ButtonGroup>
      </LogInContent>
    </LogInContainer>
  );
};

export default LogIn;
