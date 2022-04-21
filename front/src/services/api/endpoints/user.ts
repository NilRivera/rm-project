import api from '../common/api-config';

const EP_PATH = '/user/me';

/** Información de usuario */
const user = {
  /** Devuelve la información del usuario */
  get() {
    return api.get(EP_PATH);
  },
};

export default user;
