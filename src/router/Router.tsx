import { memo } from 'react';
import { 
  Routes as RoutesDom, 
  Route 
} from 'react-router-dom'

import { routesEndpoints } from './endpoint';

function RoutesComponent () {
    return (
          <RoutesDom>
            ${
              routesEndpoints.map((route, idx) => 
                <Route key={idx} path={route.path} element={route.element}/>
              )
            }
          </RoutesDom>
    )
}

export const Routes = memo(RoutesComponent, () => true);
