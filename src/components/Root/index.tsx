import { ReactNode } from "react";
import { ContainerRoot } from "./styles";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface RootProps {
  children: ReactNode;
}

export function Root({children} : RootProps) {
  return (
    <ContainerRoot>
      <Header/>
      {children}
      <Footer />
    </ContainerRoot>
  )
}