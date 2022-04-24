import { isEmpty } from 'lodash';

export const loadIfReload = async (
  selectedCharacter:object,
  characters: Array<object>,
  dispatch : Function,
  selectCharacter : Function,
  fetchCharacters: Function,
  id: string | undefined,
) => {
  if (isEmpty(selectedCharacter) && isEmpty(characters)) {
    await dispatch(fetchCharacters());
  } else if (isEmpty(selectedCharacter) && !isEmpty(characters)) {
    dispatch(selectCharacter({ id: Number(id) }));
  }
};
