import styled from "styled-components";

export const ContainerNewletter = styled.div`
  width: 100%;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
  padding: 8.5rem 2%;

  span {
    color: var(--write);
    max-width: 42.25rem;
    text-align: center;
  }

  form {
    display: flex;
    align-items: center;
    justify-content:space-between;
    gap: 1rem;
    width: 100%;
    max-width: 31.38rem;
    padding: 1.13rem 0;
    margin-top: 1.5rem;
    border-bottom: 1px solid var(--green-jussi);
    input {
      width: 100%;
    }

    > button {
      flex: 1;
    }
  }
`