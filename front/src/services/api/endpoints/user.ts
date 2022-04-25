import api from '../common/api-config';

const EP_PATH = '/login';

/** Información de usuario */
const user = {
  /** Devuelve la información del usuario */
  get({ email, password }) {
    return api.post(EP_PATH, { email, password });
  },
};

export default user;
