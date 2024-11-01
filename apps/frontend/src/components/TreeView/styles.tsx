import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  height: calc(75vh - 75px);
  max-width: 1240px;
  width: calc(100vw - 40px);
  overflow: auto;
`;

const AddModalForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  label {
    color: #434343;
    font-size: 1.5rem;
    font-family: "Figtree", sans-serif;
    font-weight: bold
  }
  input {
    width: 400px;
    height: 40px;
    border-radius: 5px;
    font-size: 2rem;
  }
  div > button {
    margin: 0 10px;
  }
`;

export { Container, AddModalForm };
