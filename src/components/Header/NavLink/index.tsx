import { routesEndpoints } from "../../../router/endpoint";
import { Link } from "../../Link";

import {
  ContainerNavLink
} from './styles';

export function NavLink() {
  return(
    <ContainerNavLink>
      {
        routesEndpoints.map((route, idx) =>
          <Link route={route} key={idx} />
        )
      }
    </ContainerNavLink>
  );
}