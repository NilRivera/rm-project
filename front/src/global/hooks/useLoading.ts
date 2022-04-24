import useCharacters from './useCharacters';
import useUser from './useUser';

export function useLoading() {
  const { isLoading: userLoading } = useUser();
  const { isLoading: charactersLoading } = useCharacters();

  return {
    loading:
    userLoading
      || charactersLoading,
  };
}
