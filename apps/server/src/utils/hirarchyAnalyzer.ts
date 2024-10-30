import { Hierarchy } from "../types/hirarchy.type";

export function analyzeText(tree:Array<Hierarchy>, text:string, targetDepth:number): Array<{[key: string]: number}> | null {
    const words = text.split(' ');


    function depthSearch(treeNode: Hierarchy, currentDepth: number = 1): void {
        if (currentDepth >= targetDepth) {
            return;
        }


        treeNode.children.forEach(nd => {
            depthSearch(nd, currentDepth+1);
        })
    }

    tree.forEach(nd => {
        depthSearch(nd);
    })

    return null
}