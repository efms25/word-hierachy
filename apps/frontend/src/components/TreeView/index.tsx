import { AddModalForm, Container } from "./styles";
import ReactModal from "react-modal";
import EmptyTree from "../EmptyTree";
import { Fragment, useState } from "react";
import TreeNode from "../TreeNode";
import Button from "../Button";

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
    const position = addModal === "root" ? undefined : addModal;
    handleAddWord(word!, position);
    setWord(undefined)
    setAddModal(undefined)
  };

  const handleAddWord = (word: string, position?: string) => {
    const treeAux = [...tree];
    treeAux.push({
      id: Math.random() * 999999999,
      name: word,
      children: [],
    });
    setTree(treeAux)
  };

  const renderNode = (tree: Array<IHierarchy>, parentIndex: string = "") => {
    if (!tree || !tree.length) return;
    return tree.map((node, index) => {
      return (
        <TreeNode key={node.id} name={node.name} id={`${index}-${parentIndex}`}>
          {renderNode(node.children, index.toString())}
          <Button onClick={handleToggleAddModal}>Adicionar Palavra</Button>
        </TreeNode>
      );
    });
  };

  return (
    <Container>
      {tree.length ? (
        <Fragment>
          {renderNode(tree)}
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
            <Button type="submit">
              Adicionar
            </Button>
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
