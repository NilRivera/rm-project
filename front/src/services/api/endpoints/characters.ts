import api from '../common/api-config';

const charactersPath = '/character';
const characterPath = '/character/characters';

/** Cahracters inforamtion */
const characters = {
  /** Returns characters information */
  updateOne({ id, isFavorite }: { id: any; isFavorite: boolean | undefined }) {
    return api.put(`${charactersPath}/${id}`, { isFavorite });
  },
  getAll() {
    return api.get(characterPath);
  },
};

export default characters;
