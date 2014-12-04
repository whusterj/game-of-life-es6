Conway's Game of Life
=====================

An Infinite, Two-Dimensional Grid.

Each tick of the simulation evaluates the following rules and updates each cell of the grid:

1. If a living cell has less than two living
   neighbors, it is dead in the next generation,
   as if by underpopulation.
2. If a living cell has two or three living
   neighbors, it stays alive in the next
   generation.
3. If a living cell has more than three living
   neighbors, it is dead in the next generation,
   as if by overcrowding.
4. If a dead cell has exactly three living neighbors,
   it comes to life in the next generation.


Made-up Additional Rules:
-------------------------

TODO: Experiment wtih removing the overcrowding restriction

TODO: Create Good and Evil cell types. Both 'reproduce' as normal, but Evil cells obliterate all adjacent Good cells (or, for an added challenge, they obliterate a maximum of 3 neighboring Good cells.)
