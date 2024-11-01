import { IHierarchy } from "../components/TreeView";

export function nestIndexAccessHierarchy(
  node: IHierarchy,
  indexLocation: Array<string>,
  callBack: (node:IHierarchy, parentNode?: IHierarchy, nodeIndex?: number) => void,
  parentNode?: IHierarchy,
  nodeIndex?: number
) {
    if(!indexLocation.length) {
        callBack(node, parentNode, nodeIndex)
        return;
    }
    const currentDepthIndexLocation = indexLocation;
    const index = currentDepthIndexLocation.shift()!

    nestIndexAccessHierarchy(node.children[parseInt(index)],currentDepthIndexLocation, callBack, node, parseInt(index))
    
}
