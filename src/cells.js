/*
 * Cells must implement the following interface:
 *
 * renderToString()
 * checkFuture(Array neighbors)
 * 
 */

export class LiveCell {

  constructor () {
    
  }

  renderToString () {
    return '+';
  }

  checkFuture (neighbors) {

    var liveNeighborCount = _countLiveNeighbors(neighbors);

    if (liveNeighborCount < 2) {
      this.aliveNextIteration = false;
    } else if (liveNeighborCount > 3) {
      this.aliveNextIteration = false;
    } else {
      this.aliveNextIteration = true;
    }
  }

}

export class DeadCell {

  constructor () {

  }

  renderToString () {
    return '.';
  }

  checkFuture (neighbors) {

    var liveNeighborCount = _countLiveNeighbors(neighbors);

    if (liveNeighborCount === 3) {
      this.aliveNextIteration = true;
    } else {
      this.aliveNextIteration = false;
    }
  }

}

function _countLiveNeighbors (neighbors) {
  var count = 0;
  for(let neighbor of neighbors) {
    if (neighbor && neighbor instanceof LiveCell) {
      count ++;
    }
  }
  return count;
}