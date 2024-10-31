import { ReactNode } from "react";
import { Container } from "./styles";

function Card({ children }: { children: ReactNode }): JSX.Element {
  return <Container>{children}</Container>;
}

export default Card;
