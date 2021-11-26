import styled from "styled-components";

export const ContainerContact =styled.div`
  width: 100%;
  background-color: var(--pink-jussi);
  color: var(--write);
  
  > div {
    display: flex;
    flex-direction: column;
    max-width: 42.25rem;
    margin: 0 auto;
    padding: 8.5rem 2%;
    text-align: center;

    span {
      margin-bottom: 2rem;
    }

    > p + p{
      font-size: 2rem;
      line-height: 1.5rem;
      margin-top: 0.5rem;
    }
  }
`