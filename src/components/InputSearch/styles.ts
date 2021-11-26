import styled from "styled-components";

export const ContainerInput = styled.div`
  width:240px;
  
  > div {
    position: relative;
    top: 0;
    width:240px;
  }
`

export const Movie = styled.div`
  width: 100%;
`

export const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  height: 2.5rem;
  border: 1px solid var(--grey-400);
  border-radius: 2rem;
  
  input {
    border: 0;
  }

  input::placeholder {
    color: var(--pink-jussi);
  }

  svg {
    font: 1.5rem;
  }
`