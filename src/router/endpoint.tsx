import { Home } from '../pages/Home';
import LogoHome from '../assets/logoJussi.svg';

export interface RoutesPropsDTO{
  path: string;
  name: string;
  icon?: string;
  element: JSX.Element;
}

export const routesEndpoints : RoutesPropsDTO[] = [
  {
    path: '/',
    name: 'Home',
    icon: LogoHome,
    element: <Home />
  },
  {
    path: '/:element=solutions',
    name: 'Nossas soluções',
    element: <Home />
  },
  {
    path: '/:element=about',
    name: 'Conheça a Jüssi',
    element: <Home />
  },
];

