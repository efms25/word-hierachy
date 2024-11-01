import { LuListTree } from "react-icons/lu";
import Button from "../Button";
import { Container, IconBox, Info } from "./styles";

function EmptyTree(): JSX.Element {
  return (
    <Container>
      <IconBox>
        <LuListTree />
      </IconBox>
      <Info>
        Nenhuma palavra foi adicionada a hierarquia, clique no botão abaixo para adicionar.
      </Info>
      <Button>Adicionar Palavra</Button>
    </Container>
  );
}

export default EmptyTree;
