import styled, {css} from "styled-components";
import { InputStyleProps } from ".";

export const ContainerInput = styled.input<InputStyleProps>`
  width: 100%;
  color: var(--write);
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;

  ${props => props.typeStyle && css`
    background-color: transparent;
    border: 0;
    &::placeholder {
    color: var(--write);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    }
  `} 
`