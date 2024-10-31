import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  background: rgb(12, 205, 163);
  background: linear-gradient(
    144deg,
    rgba(12, 205, 163, 1) 0%,
    rgba(150, 0, 255, 1) 56%,
    rgba(240, 83, 189, 1) 87%
  );
`;

const Wrapper = styled.div`
    max-width: 1280px;
    margin: auto;
    height: inherit;
`

export { Container, Wrapper };
