import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import { fetchCharacters } from '../../store/modules/characters';
import { AppDispatch, RootState } from '../../store/configureStore';

const useCharacters = (user:string | null = '') => {
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
  }, [isLoading, dispatch, error]);
  return {
    isLoading,
    error,
    characters,
    selectedCharacter,
  };
};

export default useCharacters;
