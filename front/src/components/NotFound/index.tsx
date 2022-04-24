import React from 'react';
import { useNavigate } from 'react-router-dom';
import literals from '../../global/literals';
import mortyNotFound from '../../assets/media/mortyNotFound.png';

import { NotFoundContainer, NotFoundTitle, NotFoundImage } from './styles';

const NotFound: React.FunctionComponent = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 3500);
  return (
    <NotFoundContainer>
      <NotFoundTitle>
        {literals.notFoundAlt}
        !
      </NotFoundTitle>
      <NotFoundImage src={mortyNotFound} alt={literals.notFoundAlt} />
    </NotFoundContainer>
  );
};

export default NotFound;
