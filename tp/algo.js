import { graph } from "./graph.mjs";
console.log(graph);

const seenStack = [];
const SCCFounds = [];
let index = 1;
graph.forEach((node) => {
  if (node.index === undefined) {
    console.log("node id visited : ", node.id);
    search(node);
  }
});

console.log(SCCFounds);

function search(node) {
  console.log("search in node ", node.id)
  node.index = index;
  node.lowLink = index;
  index++;
  seenStack.push(node.id);
  node.onStack = true;
  node.connectedTo.forEach((idNode) => {
    const neighbourNode = graph.find(
      (nodeInGraph) => nodeInGraph.id === idNode
    );
    if (neighbourNode.index === undefined) {
      search(neighbourNode);
      node.lowLink = Math.min(node.lowLink, neighbourNode.lowLink);
    } else if (seenStack.indexOf(neighbourNode.id) != -1) {
      node.lowLink = Math.min(node.lowLink, neighbourNode.index);
    }
  });
  if (node.lowLink === node.index) {
    const SCCFound = [];
    let currentNode;
    do {
      const currentNodeId = seenStack.pop();
      console.log("currentNodeId", currentNodeId);
      currentNode = graph.find(
        (nodeInGraph) => nodeInGraph.id === currentNodeId
      );
      currentNode.onStack = false;
      SCCFound.push(currentNode.id);
    } while (currentNode.id !== node.id);
    SCCFounds.push(SCCFound);
    console.log("push SCC", SCCFound);
  }
}
un troisième fichier .mjs (oui oui,  .MJS), pour que le navigateur comprenne qu'il s'agit d'un module
export const graph = [
  {
    id: 1,
    index: undefined,
    connectedTo: [2],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 2,
    index: undefined,
    connectedTo: [3],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 3,
    index: undefined,
    connectedTo: [1],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 4,
    index: undefined,
    connectedTo: [2, 3, 5],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 5,
    index: undefined,
    connectedTo: [4, 6],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 6,
    index: undefined,
    connectedTo: [3, 7],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 7,
    index: undefined,
    connectedTo: [6],
    onStack: false,
    lowLink: undefined,
  },
  {
    id: 8,
    index: undefined,
    connectedTo: [5, 7, 8],
    onStack: false,
    lowLink: undefined,
  },
];