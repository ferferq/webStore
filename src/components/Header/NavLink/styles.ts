import styled from "styled-components";

export const ContainerNavLink = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  
  a {
    color: var(--black);
    text-decoration: none;
  }

  img {
    width: 11.5rem;
  }
  
  a + a {
    margin-left: 2rem;
  }
`