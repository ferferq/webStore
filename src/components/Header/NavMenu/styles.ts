import styled from "styled-components";

export const ContainerNavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--black);
  
  p {
    margin: 0 2rem;
    cursor: pointer;
  }
  
  > svg {
    cursor: pointer;
  }

  svg {
    font-size: 1.37rem;
  }
`