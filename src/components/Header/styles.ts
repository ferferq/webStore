import styled from "styled-components";
import { ConfigLayout } from "../../styles/configLayout";

export const ContainerHeader = styled.header`
  position: absolute;
  top: 0; 
  width: 100%;
  padding: 0 1.5rem;
  background: var(--write);
  height: ${ConfigLayout.navBarHeight}px;
  > div {
    height: 100%;
    display: flex;
    align-items: center;
  }
`