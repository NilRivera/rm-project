import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetLocalStorage } from '../../global/hooks/useGetLocalStorage';
import { deleteLocalStorage } from '../../utils/deleteLocalStorage';
import {
  HeaderStyle, Logo, LogoutLink, CharacterListLink, LinkGroup,
} from './styles';
import literals from '../../global/literals';
import { listPath } from '../../global/constants';

const Header: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { user } = useGetLocalStorage(literals.user);
  const logOut = () => {
    deleteLocalStorage(literals.user);
    navigate('/');
  };
  return (

    <HeaderStyle>
      <Logo to="/" />
      <LinkGroup>
        <CharacterListLink
          to={listPath}
        >
          {literals.list}

        </CharacterListLink>
        {user && (
        <LogoutLink
          to="/"
          onClick={logOut}
        >
          {literals.logOut}
        </LogoutLink>
        )}
      </LinkGroup>

    </HeaderStyle>
  );
};

export default Header;
