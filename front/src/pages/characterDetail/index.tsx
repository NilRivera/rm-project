import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useCharacters from '../../global/hooks/useCharacters';
import CharacterCard from '../../components/CharacterCard';
import Button from '../../components/shared/Button';
import literals from '../../global/literals';
import theme from '../../styles/theme';
import { ButtonGroup } from './styles';
import { AppDispatch } from '../../store/configureStore';
import { selectCharacter } from '../../store/modules/characters';

const CharacterDetail: React.FunctionComponent = () => {
  const { selectedCharacter } = useCharacters();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <CharacterCard selectedCharacter={selectedCharacter} />
      <ButtonGroup>
        <Button margin="10px 5px" text={literals.previous} fontSize={theme.fontSize.medium} width={theme.buttonWidth.large} height={theme.buttonHeight.medium} onClick={() => dispatch(selectCharacter({ id: selectedCharacter.id - 1 }))} />
        <Button margin="10px 5px" text={literals.back} fontSize={theme.fontSize.medium} width={theme.buttonWidth.large} height={theme.buttonHeight.medium} onClick={() => navigate(-1)} />
        <Button margin="10px 5px" text={literals.next} fontSize={theme.fontSize.medium} width={theme.buttonWidth.large} height={theme.buttonHeight.medium} onClick={() => dispatch(selectCharacter({ id: selectedCharacter.id + 1 }))} />
      </ButtonGroup>
    </>
  );
};

export default CharacterDetail;
