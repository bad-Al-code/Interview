# Graph

- set of nodes that are connected to each other in the form of a network.

##### Vertex

- collection of vertex forms a graph. { similar to linked list }.

##### Edge

- link between two vertices.
- can be uni-directional or bi-directional; depends on graph.

### Terminologies

1. **Degree of Vertex**: total number of edes connected to a vertex. {InDegree: number of incoming edges, OUTDEGREE:
   outgoing edges }.
2. **Parallel Edges**: Two undirected edges are parallel​ if they have the same end vertices. Two directed edges are parallel if they have the same origin and destination.

3. **Self Loop**: This occurs when an edge starts and ends on the same vertex.

4. **Adjacency**: Two vertices are said to be adjacent if there is an edge connecting them directly.

### Types

1. **Undirected Graph**

- are edges are undirected; no notion of direction to the edges.

2. **Directed Graph**

- edges are uni-directional.
- For a directed graph with n vertices, the minimum number of edges that can connect a vertex with every other vertex is n-1. This excludes self-loops.

### Representations

1. **Adjacency Matrix**

- 2D matrix where each cell can contain a 0 or 1.
- If a cell contains 1, there exists an edge between the corresponding vertices e.g., Matrix[0][1]=1Matrix[0][1]=1 shows that an edge exists between vertex 0 and 1.
- For a directed graph, the usual convention is to think of the rows as sources and the columns as destinations.

2. **Adjacency List**

- array of linked list is used to store all the edges in the graph.
- size of array === number f vertices.

### Bipartite Graph

- vertices of this graph are divide into two disjointed parts in such a way that no two certices in the same part are
  adjacent to each other.

##### Cyclic Graph be Bi-Partite?

- cyclic graph: edges forma cycle.
- yes, cyclic graph can be Bipartite graph.

##### Types of Bi-Partite Graph

- star graph

- acyclic graph
- path graph

### Graph Traversal

- BFS (Breadth First Search)
- DFS (Depth First Search)

##### BFS

- grow breath-wise
- level order traversal ensures thatt for any starting vertex, we can reach all others, one level at a time.

##### DFS

- grows depth wise
- Starting from any node, we keep moving to an adjacent node until we reach the farthest level. Then we move back to the starting point and pick another adjacent node. Once again, we probe to the farthest level and move back. This process continues until all nodes are visited.
