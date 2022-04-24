import CharactersList from '../pages/charactersList';
import NotFound from '../components/NotFound';
import Landing from '../components/Landing';
import CharacterDetail from '../pages/characterDetail';

export const BASE_URL = '';
interface Route {
  url: string;
  Element: any;
}

interface Routes {
  [route: string]: Route;
}

const routes: Routes = {
  home: {
    url: BASE_URL,
    Element: Landing,
  },
  characterList: {
    url: `${BASE_URL}/character/list`,
    Element: CharactersList,
  },
  characterDetail: {
    url: `${BASE_URL}/character/:id`,
    Element: CharacterDetail,
  },
  notFound: {
    url: '*',
    Element: NotFound,
  },
};

export default routes;
