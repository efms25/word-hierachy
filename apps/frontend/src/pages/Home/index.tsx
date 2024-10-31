import Background from "../../layouts/Background";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Body, Container } from "./styles";
import TreeNode from "../../components/TreeNode";

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
            <TreeNode name="Primeiro Node">
              <p>testing child</p>
              <p>testing child</p>
              <p>testing child</p>
            </TreeNode>
          </Card>
        </Body>
      </Container>
    </Background>
  );
}

export default Home;
