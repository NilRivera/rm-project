import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetLocalStorage } from '../../global/hooks/useGetLocalStorage';
import { deleteLocalStorage } from '../../utils/deleteLocalStorage';
import {
  HeaderStyle, Logo, LogoutLink, CharacterListLink, LinkGroup,
} from './styles';
import literals from '../../global/literals';

const Header: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { user } = useGetLocalStorage(literals.user);
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
