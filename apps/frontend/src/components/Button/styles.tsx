import styled from "styled-components";

const Container = styled.button`
  padding: 5px 10px;
  font-family: "Figtree", sans-serif;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  color: #fff;
  font-weight: bold;
  border: none;
  background: ${props => props.color};
  box-shadow: 1px 1px 2px 1px rgba(32, 32, 32, 0.2);

  &:active {
    background: #333;
  }
`;

export { Container };
