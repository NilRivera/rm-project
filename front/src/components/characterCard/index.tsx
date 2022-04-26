import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { useParams } from 'react-router-dom';
import literals from '../../global/literals';
import useCharacters from '../../global/hooks/useCharacters';
import * as constants from '../../global/constants';
import { AppDispatch } from '../../store/configureStore';
import { loadIfReload } from '../../utils/loadIfReload';
import {
  selectCharacter, fetchCharacters, updateCharacter,
} from '../../store/modules/characters';
import {
  CharacterCardContainer,
  CharacterCardContent,
  CharacterCardTop,
  CharacterCardImage,
  CharacterCardPersonalData,
  CharacterCardBottom,
  CharacterFavButton,
  CharacterFavImage,
  CharacterCardPersonalDataFavGroup,
} from './styles';
import DetailInfoRow from '../shared/DetailInfoRow';
import cardBack from '../../assets/media/cardBack.png';
import fullHeart from '../../assets/media/fullHeart.png';
import emptyHeart from '../../assets/media/emptyHeart.png';

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
    isFavorite?: boolean,
    _id?:any,
  },
  isListView?: boolean,
}

const CharacterCard = ({ selectedCharacter, isListView }: CharacterProps) => {
  const { isLoading, characters } = useCharacters(null, true);
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
    name, gender, image, status, species, _id,
    location: { name: locationName }, origin, isFavorite = false,
  } = isEmpty(selectedCharacter) ? constants.load : selectedCharacter;
  return (
    <CharacterCardContainer background={cardBack} isListView={isListView}>
      <CharacterCardContent isListView={isListView}>
        <CharacterCardTop>
          <CharacterCardImage
            src={isLoading ? constants.load.image : image}
            alt={selectedCharacter?.name}
            isListView={isListView}
          />
          {!isListView && (
          <CharacterCardPersonalData>
            <CharacterCardPersonalDataFavGroup>
              <DetailInfoRow title={isLoading ? constants.load.name : name} name={name} />
              <CharacterFavButton onClick={() => selectedCharacter && dispatch(updateCharacter({
                id: _id,
                isFavorite: !isFavorite,
              }))}
              >
                <CharacterFavImage
                  src={isFavorite ? fullHeart : emptyHeart}
                  alt={literals.heartAlt}
                />
              </CharacterFavButton>
            </CharacterCardPersonalDataFavGroup>
            <DetailInfoRow
              text={isLoading ? constants.load.gender : gender}
              title={constants.gender}
            />
            <DetailInfoRow
              text={isLoading ? constants.load.status : status}
              title={constants.status}
              status={status}
            />
            <DetailInfoRow
              text={isLoading ? constants.load.species : species}
              title={constants.species}
            />
          </CharacterCardPersonalData>
          )}
        </CharacterCardTop>
        {isListView && (
        <CharacterCardBottom>
          <DetailInfoRow
            text={isLoading ? constants.load.name : name}
            title={constants.name}
          />
          <CharacterFavButton>
            <CharacterFavImage
              src={isFavorite ? fullHeart : emptyHeart}
              alt={literals.heartAlt}
            />
          </CharacterFavButton>
        </CharacterCardBottom>
        )}
        {!isListView && (
        <CharacterCardBottom>
          <DetailInfoRow text={locationName} title={constants.location} />
          <DetailInfoRow text={origin.name} title={constants.origin} />
        </CharacterCardBottom>
        )}
      </CharacterCardContent>
    </CharacterCardContainer>
  );
};

export default CharacterCard;
