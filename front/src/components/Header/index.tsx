import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetLocalStorage } from '../../utils/useGetLocalStorage';
import { deleteLocalStorage } from '../../utils/deleteLocalStorage';
import {
  HeaderStyle, Logo, LogoutLink, CharacterListLink, LinkGroup,
} from './styles';
import literals from '../../config/literals';

const Header: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useGetLocalStorage(literals.user, location);
  const logOut = () => {
    deleteLocalStorage(literals.user);
    navigate('/login');
  };
  return (

    <HeaderStyle>
      <Logo to="/" />
      <LinkGroup>
        <CharacterListLink to="/character/list">{literals.list}</CharacterListLink>
        {user && <LogoutLink to="/login" onClick={logOut}>{literals.logOut}</LogoutLink>}
      </LinkGroup>

    </HeaderStyle>
  );
};

export default Header;
