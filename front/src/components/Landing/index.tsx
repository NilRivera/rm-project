import React from 'react';
import literals from '../../global/literals';
import LandingImg from '../../assets/media/landingImg.png';
import { LandingContainer, LandingImage, LandingTitle } from './styles';

const Landing: React.FunctionComponent = () => (
  <LandingContainer>
    <LandingTitle>
      {literals.welcome}
      !
    </LandingTitle>
    <LandingImage src={LandingImg} alt={literals.landingAlt} />
  </LandingContainer>
);

export default Landing;
