import { Hierarchy } from "../types/hirarchy.type";

export function analyzeText(
  tree: Array<Hierarchy>,
  text: string,
  targetDepth: number
): Map<string,number>| null {
  const words: Array<string> = text.split(" ");
  const counts = new Map();
  let currentNameComparator: string;

  function depthSearch(treeNode: Hierarchy, currentDepth: number = 1): void {
    if (currentDepth >= targetDepth) {
      if (currentDepth === targetDepth) {
        currentNameComparator = treeNode.name;
      }
      const isWordMentioned = words.includes(treeNode.name.toLowerCase());

      if (isWordMentioned) {
        if (counts.has(currentNameComparator)) {
          counts.set(
            currentNameComparator,
            counts.get(currentNameComparator) + 1
          );
        } else {
          counts.set(currentNameComparator, 1);
        }
      }
    }

    treeNode.children?.forEach((nd) => {
      depthSearch(nd, currentDepth + 1);
    });
  }

  tree.forEach((nd) => {
    depthSearch(nd);
  });

  return counts;
}
