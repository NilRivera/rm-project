export const useFilterCharacters = (characters) => {
  const filteredCharacters = characters?.filter(({ isFavorite }) => isFavorite === true);
  return { filteredCharacters };
};
