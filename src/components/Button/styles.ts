import styled, {css} from "styled-components";
import { ButtonStyleProps } from ".";

export const ContainerButton = styled.button<ButtonStyleProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0.75rem 1.43rem; 
  border-radius: 0.37rem; 

  transition: scale 0.2s;

  &:hover{
    transform: scale(1.05);
  }

  ${
    props => props.typeStyle === 'submit' && css`
      padding: 0; 
      border-radius: 0; 
      border: 0;  
      background-color: transparent;   
      color: var(--green-jussi);
    `
  }

  ${
    props => props.typeStyle === 'outline-black' && css`
      border: 1px solid var(--black);
      background-color: transparent;     
    `
  }

  ${
    props => props.typeStyle === 'green' && css`
      border: 0;
      align-self: flex-end;
      background-color: var(--green-jussi);
    `
  }

`