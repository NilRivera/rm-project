import api from '../common/api-config';

const EP_PATH = '/api/v1/characters';

/** Cahracters inforamtion */
const characters = {
  /** Returns characters information */
  get(params?) {
    return api.get(EP_PATH, {
      params,
    });
  },
};

export default characters;
