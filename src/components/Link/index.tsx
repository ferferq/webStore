import { Link as LinkRouter } from 'react-router-dom';

import { RoutesPropsDTO } from "../../router/endpoint";
import { TextParagraph } from "../../styles/tagGlobals/TagText";

interface LinkProps {
  route: RoutesPropsDTO;
}

export function Link({route} : LinkProps) {
  return (
    <LinkRouter to={route.path}>
      {
              route.icon 
              ? 
                (
                  <img alt={route.name} src={route.icon} />
                )
              : 
                (
                  <TextParagraph>{route.name}</TextParagraph>
                )
      }
    </LinkRouter>  
  )
}


