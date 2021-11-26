import styled from "styled-components";

export const ContainerFooter = styled.footer`
  width: 100%;
  padding: 0 2%;
  background-color: var(--black);

  > img {
    width: 8.88rem;
  }

  > div {
    width: 100%;
    margin: 0 auto;
    max-width: 1024px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 1.5rem 0;

    div {
      display: flex;
      align-items: center;
      justify-content:center;
      gap: 1.06rem;

      img {
        width: 2rem;
      }
    }
  }
`