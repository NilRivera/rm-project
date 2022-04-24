import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { fetchCharacters } from '../../store/modules/characters';
import { AppDispatch, RootState } from '../../store/configureStore';

export const useCharacters = (initialLoad: boolean = false) => {
  const dispatch: AppDispatch = useDispatch();
  const {
    isLoading, error, characters, selectedCharacter,
  } = useSelector(
    (state: RootState) => state.characters,
  );
  useEffect(() => {
    if (!isLoading && !error && isEmpty(characters)) {
      dispatch(fetchCharacters());
    }
  }, [initialLoad, isLoading, dispatch, error]);
  return {
    isLoading,
    error,
    characters,
    selectedCharacter,
  };
};

export default useCharacters;
