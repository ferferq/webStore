import styled from 'styled-components';

export const ContainerSolutions = styled.div`
  padding: 3.5rem 2%;

  > div {
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    
    > div {
      > span:first-child {
        color: var(--green-jussi);
        margin-right: 0.25rem;
      }
    }

    > section {
      margin-top: 1.5rem;
      display: flex;
      gap: 1.25rem;
    }
  }
`