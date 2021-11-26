import styled from "styled-components";

export const ContainerBanner = styled.div`
  width: 100%;
  background-color: var(--green-jussi);
  padding: 0 2%;

  > div {
    padding: 2.5rem 0 0.15rem;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  flex-direction: space-around;
  align-items: stretch;

  > div {
    width: 100%;
    display: flex;

    img {
      width: 29.37rem;
    }

    section {
      max-width: 28.19rem;
      margin-left: auto;
      margin-right: 4rem;

      > h1 {
        margin-top: 2.5rem;
      }

      > p {
        max-width: 20.62rem;
        margin: 1rem 0 2rem 0;
      }

      button {
        max-width: 12.25rem;
      }
    }
  }
`

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.37rem 2%;

  background: var(--grey-200);

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    > svg {
      font-size: 1rem;
    }
  }
`