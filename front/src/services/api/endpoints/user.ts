import api from '../common/api-config';

const EP_PATH = '/api/v1/user/me';
type Ep = any;

/** Información de usuario */
const user = {
  /** Devuelve la información del usuario */
  get() {
    return api.get<
      Ep['get']['responses']['200']['content']['application/json']
    >(EP_PATH);
  },
};

export default user;
