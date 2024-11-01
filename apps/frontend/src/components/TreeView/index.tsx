import { Container } from "./styles";
import EmptyTree from "../EmptyTree";
import { useState } from "react";
import TreeNode from "../TreeNode";

export type IHierarchy = {
  id: number;
  name: string;
  children: IHierarchy[];
};

function TreeView(): JSX.Element {
  const [tree, setTree] = useState<Array<IHierarchy>>([])
  

  const renderNode = (tree: Array<IHierarchy>, parentIndex: string = "") => {
    if (!tree || !tree.length) return;
    return tree.map((node, index) => {
      return (
        <TreeNode key={node.id} name={node.name} id={`${index}-${parentIndex}`}>
          {renderNode(node.children, index.toString())}
        </TreeNode>
      );
    });
  };

  return (
    <Container>{tree.length ? renderNode(tree) : <EmptyTree />}</Container>
  );
}

export default TreeView;
