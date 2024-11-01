import { LuListTree } from "react-icons/lu";
import Button from "../Button";
import { Container, IconBox, Info, Guide } from "./styles";

function EmptyTree({ addWordClick }: { addWordClick: () => void }): JSX.Element {
  return (
    <Container>
      <IconBox>
        <LuListTree />
      </IconBox>
      <Info>
        Nenhuma palavra foi adicionada a hierarquia, clique no botão abaixo para
        adicionar.
      </Info>
      <Guide>
        {`1. Clique em adicionar ->
        2. Digite a palavras que deseja adicionar ->
        3. Clique em adicionar para confimar`}
      </Guide>
      <Button onClick={addWordClick}>Adicionar Palavra</Button>
    </Container>
  );
}

export default EmptyTree;
