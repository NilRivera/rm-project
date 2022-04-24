import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { fetchCharacters } from '../../store/modules/characters';
import { AppDispatch, RootState } from '../../store/configureStore';

const useCharacters = (user:string | null = '', update:boolean | null = false) => {
  const dispatch: AppDispatch = useDispatch();
  const {
    isLoading, error, characters, selectedCharacter,
  } = useSelector(
    (state: RootState) => state.characters,
  );
  useEffect(() => {
    if (!isEmpty(user) && !isLoading && !error && isEmpty(characters)) {
      dispatch(fetchCharacters());
    }
  }, [update, isLoading, dispatch, error, characters]);
  return {
    isLoading,
    error,
    characters,
    selectedCharacter,
  };
};

export default useCharacters;
