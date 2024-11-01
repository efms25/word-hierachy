import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const IconBox = styled.div`
  color: rgba(210, 210, 210);
  font-size: 10rem;
`;

const Info = styled.div`
  color: rgba(180, 180, 180);
  font-size: clamp(1rem, 3vh, 2rem);
  text-align: center;
`

export { Container, IconBox, Info };
