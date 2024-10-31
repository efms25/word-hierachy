import Background from "../../layouts/Background";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Body, Container } from "./styles";

function Home() {
  return (
    <Background>
      <Container>
        <Header
          title="Gerador de Hierarquia de Palavras"
          subtitle="Gere uma arvore de palavras, como por exemplo: categorias com subcategorias e exporte em JSON."
        />
        <Body>
          <Card>teste</Card>
        </Body>
      </Container>
    </Background>
  );
}

export default Home;
