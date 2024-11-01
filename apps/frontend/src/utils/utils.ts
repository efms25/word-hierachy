import { IHierarchy } from "../components/TreeView";

export function nestIndexAccessHierarchy(
  node: IHierarchy,
  indexLocation: Array<string>,
  callBack: (
    node: IHierarchy,
    parentNode?: IHierarchy,
    nodeIndex?: number
  ) => void,
  parentNode?: IHierarchy,
  nodeIndex?: number
) {
  if (!indexLocation.length) {
    //Caso alcançado o nó desejado uma função callback é executada
    callBack(node, parentNode, nodeIndex);
    return;
  }
  const currentDepthIndexLocation = indexLocation;
  const index = currentDepthIndexLocation.shift()!;


  //Percorre o caminho a té o nó desejado utilizando recursividade 
  nestIndexAccessHierarchy(
    node.children[parseInt(index)],
    currentDepthIndexLocation,
    callBack,
    node,
    parseInt(index)
  );
}
