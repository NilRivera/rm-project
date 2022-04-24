import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import useCharacters from '../../global/hooks/useCharacters';
import { selectCharacter } from '../../store/modules/characters';
import { AppDispatch } from '../../store/configureStore';
import CharacterCard from '../../components/CharacterCard';
import { CharacterCarLink, CharacterCardContainer } from './styles';
import { useGetLocalStorage } from '../../global/hooks/useGetLocalStorage';
import literals from '../../global/literals';

const CharactersList: React.FunctionComponent = () => {
  const id = useId();
  const dispatch : AppDispatch = useDispatch();
  const { user } = useGetLocalStorage(literals.user);
  const { characters } = useCharacters(user);

  return (

    <CharacterCardContainer>
      {characters.map((element) => (
        <CharacterCarLink key={`${id}-${element.name}`} to={`/character/${element.id}`} onClick={() => dispatch(selectCharacter({ id: element.id }))}>
          <CharacterCard selectedCharacter={element} isListView />
        </CharacterCarLink>
      ))}
    </CharacterCardContainer>

  );
};

export default CharactersList;
