import Background from "../../layouts/Background";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Body, Container } from "./styles";
import TreeView from "../../components/TreeView";

function Home() {
  return (
    <Background>
      <Container>
        <Header
          title="Gerador de Hierarquia de Palavras"
          subtitle="Gere uma arvore de palavras, como por exemplo: categorias com subcategorias e exporte em JSON."
        />
        <Body>
          <Card>
            <TreeView />
          </Card>
        </Body>
      </Container>
    </Background>
  );
}

export default Home;
