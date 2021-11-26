import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { TextParagraph } from "../../styles/tagGlobals/TagText";
import { ContainerButton } from "./styles";

 type Method =
  | 'outline-black' | 'green' | 'submit'

export interface ButtonStyleProps {
  iconLeft?: boolean;
  typeStyle: Method;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: ButtonStyleProps;
  children: ReactNode;
}

function  ButtonComponent({
  children,
  buttonStyle: {
    ...buttonConfig
  },
  ...rest
} : ButtonProps) {
  return (
    <ContainerButton 
      {...buttonConfig} 
      {...rest}
    >
      <TextParagraph>
        {children}
      </TextParagraph>
    </ContainerButton>
  );
}

export const Button = memo(ButtonComponent, (prevProps, nextProps) => {
  return true;
})