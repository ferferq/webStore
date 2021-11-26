import styled from 'styled-components';

export const ContainerProductSolutions = styled.div`
  width: 100%;
  max-width: 15.06rem;
  background: var(--write);
  border: 1px solid var(--grey-200);
  border-radius: 0.25rem;
  padding: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6.25rem;
    height: 6.25rem;
    border-radius: 6.25rem;
    background: var(--grey-200);
    margin-bottom: 3.31rem;

    > img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    > p {
      font-size: 2rem;
      line-height: 2.37rem;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > strong {
      font-size: 0.75rem;
      line-height: 1.12rem;
      color: var(--pink-jussi);
      font-weight: 500;
    }

    ul {
      li {
        font-size: 0.75rem;
        line-height: 1.12rem;
        color: var(--grey-700);
        font-weight: 500;
        list-style-position: inside;
      }
    }
  }
`