import React from 'react';
import {
  CharacterCardContainer,
  CharacterCardContent,
  CharacterCardTop,
  CharacterCardImage,
  CharacterCardPersonalData,
} from './styles';

import DetailInfoRow from '../shared/DetailInfoRow';
import cardBack2 from '../../assets/media/cardBack2.png';

export type CharacterProps = {
  image?: string,
  name: string,
  gender:string,
  status:string,
  species:string,
}
const CharacterCard = ({ selectedCharacter }:any) => (
  <CharacterCardContainer background={cardBack2}>
    <CharacterCardContent>
      <CharacterCardTop>

        <CharacterCardImage src={selectedCharacter.image} alt={selectedCharacter.name} />
        <CharacterCardPersonalData>
          <DetailInfoRow title={selectedCharacter.name} name />
          <DetailInfoRow text={selectedCharacter.gender} title="Gender" />
          <DetailInfoRow text={selectedCharacter.status} title="Status" status={selectedCharacter.status} />
          <DetailInfoRow text={selectedCharacter.species} title="Species" />
        </CharacterCardPersonalData>

      </CharacterCardTop>
    </CharacterCardContent>
  </CharacterCardContainer>
);

export default CharacterCard;
