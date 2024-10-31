import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 3.5vw, 4rem);
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 3px #0000003d;
  text-align: center;
  font-family: "Figtree", sans-serif;
  max-width: 800px;
`;

const Subtitle = styled.span`
  font-size: clamp(1rem, 1.3vw, 2rem);
  text-align: center;
  color: #ffffffe4;
  text-shadow: 2px 2px 3px #0000003d;
  font-family: "Figtree", sans-serif;
  max-width: 700px;
`;
export { Container, Title, Subtitle };
