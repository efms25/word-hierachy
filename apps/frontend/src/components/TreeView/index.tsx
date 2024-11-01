import { AddModalForm, Container } from "./styles";
import ReactModal from "react-modal";
import EmptyTree from "../EmptyTree";
import { Fragment, useState } from "react";
import TreeNode from "../TreeNode";
import Button from "../Button";
import { nestIndexAccessHierarchy } from "../../utils/utils";

export type IHierarchy = {
  id: number;
  name: string;
  children: IHierarchy[];
};

function TreeView(): JSX.Element {
  const [tree, setTree] = useState<Array<IHierarchy>>([]);
  const [addModal, setAddModal] = useState<string | undefined>(undefined);
  const [word, setWord] = useState<string | undefined>(undefined);

  const handleToggleAddModal = (position: string = "root") => {
    if (addModal) {
      setAddModal(undefined);
      return;
    }
    setAddModal(position);
  };

  const onSubmitAdd = () => {
    const position = addModal;
    handleAddWord(word!, position!);
    setWord(undefined);
    setAddModal(undefined);
  };

  const handleAddWord = (word: string, position: string) => {
    const treeAux = [...tree];

    const nodeData: IHierarchy = {
      id: Math.random() * 999999999,
      name: word,
      children: [],
    };
    if (position === "root") {
      treeAux.push(nodeData);
      setTree(treeAux);
      return;
    }

    const indexSequence: Array<string> = position
      .split("-")
      .filter((f) => f !== "");
    const idx: number = parseInt(indexSequence.shift() as string);
    nestIndexAccessHierarchy(treeAux[idx], indexSequence, (node) => {
      node.children.push(nodeData);
    });

    setTree(treeAux);
  };

  const onRemoveNode = (indexId: string) => {
    setTree((prevState) => {
      const indexSequence: Array<string> = indexId
        .split("-")
        .filter((f) => f !== "");
      const newTree = [...prevState];

      const idx: number = parseInt(indexSequence.shift() as string);

      if(!indexSequence.length) {
        if (!confirm(`Tem certeza que deseja deletar a palavra ${newTree[idx].name} e todos os seus sub nós?`)) {
          return prevState;
        }
        newTree.splice(idx, 1);
        return newTree;
      }

      nestIndexAccessHierarchy(
        newTree[idx],
        indexSequence,
        (node, parent, parentIndex) => {
          if (!confirm(`Tem certeza que deseja deletar a palavra ${node.name} e todos os seus sub nós?`)) {
            return prevState;
          }
          parent?.children.splice(parentIndex as number, 1);
        }
      );

      return newTree;
    });
  };
  const renderNode = (tree: Array<IHierarchy>, parentIndex: string = "") => {
    if (!tree || !tree.length) return;
    return tree.map((node, index) => {
      return (
        <TreeNode
          key={node.id}
          name={node.name}
          id={`${parentIndex}-${index}`}
          onRemove={onRemoveNode}
        >
          {renderNode(node.children, `${parentIndex}-${index}`)}
          <Button
            style={{ marginTop: 10 }}
            onClick={() => handleToggleAddModal(`${parentIndex}-${index}`)}
          >
            Adicionar Palavra ao nó{" "}
            {node.name.length > 10 ? node.name.slice(0, 10) + "..." : node.name}
          </Button>
        </TreeNode>
      );
    });
  };

  return (
    <Container>
      {tree.length ? (
        <Fragment>
          {renderNode(tree)}
          <Button style={{ marginTop: 10 }} onClick={handleToggleAddModal}>
            Adicionar Palavra à raiz
          </Button>
        </Fragment>
      ) : (
        <EmptyTree addWordClick={handleToggleAddModal} />
      )}
      <ReactModal isOpen={!!addModal}>
        <AddModalForm action="#" onSubmit={onSubmitAdd}>
          <label htmlFor="add-name-field">
            Insira a palvra que deseja adicionar
          </label>
          <input
            id="add-name-field"
            type="text"
            name="name"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <div>
            <Button type="submit">Adicionar</Button>
            <Button onClick={handleToggleAddModal} type="button" color="#CCC">
              Cancelar
            </Button>
          </div>
        </AddModalForm>
      </ReactModal>
    </Container>
  );
}

export default TreeView;
