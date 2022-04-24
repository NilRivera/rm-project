import useCharacters from './useCharacters';
import useUser from './useUser';

export function useLoading() {
  const { isLoading: competitionsLoading } = useUser();
  const { isLoading: meLoading } = useCharacters();

  return {
    loading:
      competitionsLoading
      || meLoading,
  };
}
