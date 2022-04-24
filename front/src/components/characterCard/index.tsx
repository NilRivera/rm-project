import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { useParams } from 'react-router-dom';
import { selectCharacter, fetchCharacters } from '../../store/modules/characters';

import {
  CharacterCardContainer,
  CharacterCardContent,
  CharacterCardTop,
  CharacterCardImage,
  CharacterCardPersonalData,
  CharacterCardBottom,
} from './styles';
import DetailInfoRow from '../shared/DetailInfoRow';
import cardBack from '../../assets/media/cardBack.png';
import { AppDispatch, RootState } from '../../store/configureStore';
import { loadIfReload } from '../../utils/loadIfReload';
import { load } from '../../global/constants';

export type locationProps = {
  name: string,
}
export type originProps = {
  name: string,
}

export type CharacterProps = {
  selectedCharacter: {
    image?: string,
    name: string,
    gender:string,
    status:string,
    species:string,
    location:locationProps,
    origin:originProps,
  },
  isListView?: boolean,
}

const CharacterCard = ({ selectedCharacter, isListView }: CharacterProps) => {
  const { isLoading, characters } = useSelector((state: RootState) => state.characters);
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    loadIfReload(
      selectedCharacter,
      characters,
      dispatch,
      selectCharacter,
      fetchCharacters,
      id,
    );
  }, [selectedCharacter, characters]);
  const {
    name, gender, image, status, species, location: { name: locationName }, origin,
  } = isEmpty(selectedCharacter) ? load : selectedCharacter;
  return (
    <CharacterCardContainer background={cardBack} isListView={isListView}>
      <CharacterCardContent isListView={isListView}>
        <CharacterCardTop>
          <CharacterCardImage
            src={isLoading ? load.image : image}
            alt={selectedCharacter?.name}
            isListView={isListView}
          />
          {!isListView && (
          <CharacterCardPersonalData>
            <DetailInfoRow title={isLoading ? load.name : name} name={name} />
            <DetailInfoRow text={isLoading ? load.gender : gender} title="Gender" />
            <DetailInfoRow text={isLoading ? load.status : status} title="Status" status={status} />
            <DetailInfoRow text={isLoading ? load.species : species} title="Species" />
          </CharacterCardPersonalData>
          )}
        </CharacterCardTop>
        {isListView && (
        <CharacterCardBottom>
          <DetailInfoRow text={isLoading ? load.name : name} title="Name" />
        </CharacterCardBottom>
        )}
        {!isListView && (
        <CharacterCardBottom>
          <DetailInfoRow text={locationName} title="Location" />
          <DetailInfoRow text={origin.name} title="Origin" />
        </CharacterCardBottom>
        )}
      </CharacterCardContent>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
