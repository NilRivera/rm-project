import api from '../common/api-config';

const EP_PATH = '/character/';

/** Cahracters inforamtion */
const characters = {
  /** Returns characters information */
  getOne(params?: number) {
    return api.get(EP_PATH + params);
  },
  getAll() {
    return api.get(EP_PATH);
  },
};

export default characters;
