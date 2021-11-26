import { TextParagraph } from "../../../styles/tagGlobals/TagText";
import { FiShoppingCart } from 'react-icons/fi';
import { InputSearch } from "../../InputSearch";
import { ContainerNavMenu } from "./styles";

export function NavMenu() {
  return (
    <ContainerNavMenu>
      <InputSearch />
      <TextParagraph>Login</TextParagraph>
      <FiShoppingCart />
    </ContainerNavMenu>
  )
}