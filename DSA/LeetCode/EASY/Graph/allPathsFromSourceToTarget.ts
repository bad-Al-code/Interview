class DagPathFinder{
  private readonly graph: number[][];
  private readonly targetNode: number;
  private readonly results: number[][] = [];
  private currentPath: number[] = [];

  constructor(graph: number[][]){ 
    this.graph = graph;
    this.targetNode = graph.length - 1;
    if(this.targetNode < 0) { throw new Error('')};
  }

    public findAllPaths(): number[][] {
      this.results.length = 0;
      this.currentPath.length = 0;

      if(this.graph.length> 0) { this._dfs(0);}

      return this.results;
    }

    private _dfs(currentNode: number): void {
      this.currentPath.push(currentNode);
      if(currentNode === this.targetNode) { 
        this.results.push([...this.currentPath]);
      }else {
        const neighbors = this.graph[currentNode]?? [];
        for(const neighbor of neighbors) {
          this._dfs(neighbor);
        }
      }

      this.currentPath.pop();
    }
}

function allPathsSourceTarget(graph: number[][]) {
  if (!graph || !Array.isArray(graph)) { console.error('Invalid input: graph must be an array.'); return [] }

  const n = graph.length;
  if (n === 0) return [];

  try {
    const pathFinder = new DagPathFinder(graph);

    return pathFinder.findAllPaths();
  } catch (error) {
   console.error('Error during pathFinding initialization: ', error) ;
   return [];
  }


}

const graph1 = [[1, 2], [3], [3], []];
console.log("Example 1 Paths:", allPathsSourceTarget(graph1));

const graph2 = [[4, 3, 1], [3, 2, 4], [3], [4], []];
console.log("Example 2 Paths:", allPathsSourceTarget(graph2));

const graphZero: number[][] = [];
console.log("Example Empty Graph:", allPathsSourceTarget(graphZero));

const graphSingle = [[]]; 
console.log("Example Single Node Graph:", allPathsSourceTarget(graphSingle));