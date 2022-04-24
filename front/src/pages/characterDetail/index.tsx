import React from 'react';
import useCharacters from '../../global/hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard';

const CharacterDetail: React.FunctionComponent = () => {
  const { selectedCharacter } = useCharacters();
  return (
    <CharacterCard selectedCharacter={selectedCharacter} />
  );
};

export default CharacterDetail;
