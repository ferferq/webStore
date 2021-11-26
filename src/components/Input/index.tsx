import { InputHTMLAttributes } from "react"
import { ContainerInput } from "./styles"

type Method =
  | 'transparent'

export interface InputStyleProps {
  typeStyle: Method;
}

interface InuptProps extends InputHTMLAttributes<HTMLInputElement> {
  inputStyle: InputStyleProps;
}

export function Input({
  type="text",
  inputStyle: {
    ...inputConfig
  },
  ...rest
} : InuptProps){
  return(
    <ContainerInput
      type={type}
      {...inputConfig}
      {...rest}
     />
  )
}
