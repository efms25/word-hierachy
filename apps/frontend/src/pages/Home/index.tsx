import { useContext } from "react";
import Background from "../../layouts/Background";
import Header from "../../components/Header";
import Card from "../../components/Card";
import { Body, Container } from "./styles";
import TreeView from "../../components/TreeView";
import { AppContext } from "../../contexts/AppContext";
import Button from "../../components/Button";
import { saveAs } from "file-saver";

function Home() {
  const { tree } = useContext(AppContext);

  const handleGenerateJson = () => {
    try {
      const blob = new Blob([JSON.stringify(tree)], {
        type: "application/json",
      });
      saveAs(blob, "hierarchy.json");
      alert("Arquivo gerado com sucesso.");
    } catch (err) {
      alert("Ocorreu um erro na tentativa de geração do arquivo");
      throw new Error(
        `Ocorreu um erro na tentativa de geração do arquivo, tente novamente. ${err}`
      );
    }
  };

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
        <div>
          <Button
            onClick={handleGenerateJson}
            style={{ margin: 10, float: "right", visibility: tree.length ? "visible" : "hidden" }}
            disabled={!tree.length}
          >
            Gerar arquivo de hierarquia
          </Button>
        </div>
      </Container>
    </Background>
  );
}

export default Home;
