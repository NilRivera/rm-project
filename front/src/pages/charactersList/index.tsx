import React, { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { characterPathliteral } from '../../global/constants';
import useCharacters from '../../global/hooks/useCharacters';
import { selectCharacter } from '../../store/modules/characters';
import { AppDispatch } from '../../store/configureStore';
import CharacterCard from '../../components/CharacterCard';
import Button from '../../components/shared/Button';
import { CharacterCarLink, CharacterCardContainer } from './styles';
import theme from '../../styles/theme';
import literals from '../../global/literals';
import { useGetLocalStorage } from '../../global/hooks/useGetLocalStorage';
import { useFilterCharacters } from '../../global/hooks/useFilterCharacters';

const CharactersList: React.FunctionComponent = () => {
  const id = useId();
  const [favFilter, setFavFilter] = useState(false);
  const dispatch : AppDispatch = useDispatch();
  const { user } = useGetLocalStorage(literals.user);
  const { characters } = useCharacters(user);
  const { filteredCharacters } = useFilterCharacters(characters);
  return (
    <>
      <Button
        padding="10px 5px"
        fontSize={theme.fontSize.medium}
        onClick={() => setFavFilter(!favFilter)}
        text={favFilter ? literals.normalList : literals.favorites}
      />
      <CharacterCardContainer>
        {(favFilter ? filteredCharacters : characters)?.map((element) => (
          <CharacterCarLink
            key={`${id}-${element.name}`}
            to={`${characterPathliteral}${element.id}`}
            onClick={() => dispatch(selectCharacter({ id: element.id }))}
          >
            <CharacterCard selectedCharacter={element} isListView />
          </CharacterCarLink>
        ))}
      </CharacterCardContainer>
    </>
  );
};

export default CharactersList;
