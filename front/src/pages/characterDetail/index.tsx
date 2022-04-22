import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCard from '../../components/characterCard';
import { RootState } from '../../store/configureStore';

const CharacterDetail = () => {
  const { selectedCharacter } = useSelector((state: RootState) => state.characters);

  return (
    <CharacterCard selectedCharacter={selectedCharacter} />
  );
};

export default CharacterDetail;
