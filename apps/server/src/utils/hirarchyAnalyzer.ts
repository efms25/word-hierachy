/**
 * Função principal para analisar o texto com base em uma árvore hierárquica
 * @Param tree - A árvore hierárquica a ser analisada
 * @Param text - A frase a ser analisada
 * @Param targetDepth - O nível de profundidade de interesse na hierarquia
 * @returns hashMap com a contagem de palavras.
 */
import { Hierarchy } from "../types/hirarchy.type";


export function analyzeText(
  tree: Array<Hierarchy>,
  text: string,
  targetDepth: number
): Map<string,number>| null {
  const words: Array<string> = text.split(" ");
  // O hashMap possui um bom desepenho em sua execução,
  // ideal para armazenar a contagem nos nós alvo
  const counts = new Map();  
  let currentNameComparator: string;  // Variável para armazenar o nome do nó no nível desejado

  // Função recursiva para busca em profundidade na árvore
  // seguindo a estratégia Depth first search, que foca em 
  // explorar a profundidade da árvore antes de se mover para o nível
  function depthSearch(treeNode: Hierarchy, currentDepth: number = 1): void {
    if (currentDepth >= targetDepth) {
      if (currentDepth === targetDepth) {
        currentNameComparator = treeNode.name;
      }
      // Verifica se o nome do nó é mencionado no texto
      // pode-se ser utilizado outras estratégias de comparação,
      // porém apenas utilizar a função includes encaixa-se bem,
      // na regra de negócio requisitada no desafio
      const isWordMentioned = words.includes(treeNode.name.toLowerCase());

      if (isWordMentioned) {
        // Incrementa a contagem se o nó já foi mencionado
        // ou inicializa a contagem para um novo nó
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

    // Itera sobre os filhos do nó atual e chama a função recursivamente
    treeNode.children?.forEach((nd) => {
      depthSearch(nd, currentDepth + 1);
    });
  }

  tree.forEach((nd) => {
    depthSearch(nd);
  });

  return counts;
}