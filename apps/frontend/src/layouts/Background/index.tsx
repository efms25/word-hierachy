import { ReactNode } from "react";
import { Container, Wrapper } from "./styles";

function Background({ children }: { children: ReactNode }): JSX.Element {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default Background;
