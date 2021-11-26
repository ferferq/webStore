import styled from "styled-components";

export const ContainerAbout = styled.div`
  width: 100%;
  background: linear-gradient(
  90deg,
  var(--write) 50%,
  var(--grey-200) 50%
  );
  padding: 0 2%;

  > div {
    max-width: 64rem;
    display: flex;
    margin: 0 auto;
    padding: 4rem 0;

    div:first-child {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    div:last-child {
      margin-left: 6.68rem;
      img {
        max-width:42.43rem;
      }
    }
  }
`