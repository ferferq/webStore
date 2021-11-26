import { ContainerGlobal } from "../../styles/tagGlobals/TagContainerGlobal";
import { NavLink } from "./NavLink";
import { NavMenu } from "./NavMenu";
import { ContainerHeader } from "./styles";

export function Header() {
  return (
    <ContainerHeader>
        <ContainerGlobal>
          <NavLink />
          <NavMenu />
        </ContainerGlobal>
    </ContainerHeader>
  )
}
