Conway's Game of Life
=====================

Installation
------------

A Vagrantfile is included for spinning up a VM running Ubuntu 14.04. This is not required to run the app, but it helps.

Clone the repository and get the vagrant box going:

```
$ vagrant up
```

Install node version manager:

```
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash
```

Install the latest stable version of nodejs and start using it (at the time of this writing, the latest is 0.10):

```
$ nvm install stable
$ nvm use 0.10
```

Descend into the game-of-life directory:

```
cd ~/game-of-life
```

And install our app dependencies with node. If you're hosting a vagrant VM on windows, the `--no-bin-links` flag is mandatory:

```
$ npm install --no-bin-links
```

Finally, we need to install phantomjs, karma-cli, and grunt-cli globally, so we can run them from the command line:

```
npm install -g karma-cli
npm install -g phantomjs
npm install -g grunt-cli
```


Run the Tests
-------------

```
$ karma run karma.conf.js
```

Rules of Conway's Game of Life
------------------------------

These rules included here for easy reference.

Takes place on an infinite, two-dimensional grid.

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
