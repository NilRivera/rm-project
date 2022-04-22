import CharactersList from '../pages/charactersList';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import LogIn from '../components/LogIn';

export const BASE_URL = '';
interface Route {
  url: string;
  Element: any;
  name?: string;
  Icon?: any;
  shortName?: string;
}

interface Routes {
  [route: string]: Route;
}

const routes: Routes = {
  error: {
    url: `/as`,
    Element: Header,
  },
  incidents: {
    url: `${BASE_URL}/login/`,
    Element: LogIn,
  },
  characterList: {
    url: `${BASE_URL}/character/list`,
    Element: CharactersList,
  },
  characterDetail: {
    url: `${BASE_URL}/character/detail/:id`,
    Element: Header,
  },
  /* home: {
    url: BASE_URL,
    Element: Header,
  }, */
  notFound: {
    url: '*',
    Element: NotFound,
  },
};

export default routes;
