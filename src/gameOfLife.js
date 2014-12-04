import MatrixSizeFactory from 'matrix/matrixSizeFactory';
import MatrixFactory from 'matrix/matrixFactory';
import Matrix from 'matrix/matrix';
import MatrixLocation from 'matrix/matrixLocation';
import { LiveCell, DeadCell } from 'cells';


var matrixLocation = new MatrixLocation(10, 10);

console.log(matrixLocation);

var gameOfLifeContainer = document.getElementById('gameOfLife'),
    stepBtn             = document.getElementById('step'),
    randomBtn           = document.getElementById('randomize'),
    calcTime            = document.getElementById('calcTime');

var matrix = MatrixFactory.medium();

matrix.fill(DeadCell);
addRandomLiveCells();
renderMatrix();

/// event listeners

randomBtn.addEventListener('click', function () {
  matrix.fill(DeadCell);
  addRandomLiveCells();
  renderMatrix();
});

stepBtn.addEventListener('click', function () {
  var start = new Date();
  checkCellFutures(matrix);
  updateCells(matrix);
  renderMatrix();
  var end = new Date();
  setCalculationTime(start, end);
});

/// functions

function renderMatrix () {
  gameOfLifeContainer.innerHTML = matrix.renderToString();
}

function checkCellFutures (matrix) {

  var matrixLocations = matrix.getLocations();

  for (let matrixLocation of matrixLocations) {
    var cell = matrix.contents(matrixLocation),
        cellNeighbors = matrix.getNeighborsOf(matrixLocation);
    cell.checkFuture(cellNeighbors);
  }

}

function updateCells (matrix) {

  var matrixLocations = matrix.getLocations();

  for (let matrixLocation of matrixLocations) {
    var cell = matrix.contents(matrixLocation);

    // We're only interested in changes of state:
    if (cell instanceof LiveCell && !cell.aliveNextIteration) {
      matrix.contents(matrixLocation, new DeadCell())
    } else if (cell instanceof DeadCell && cell.aliveNextIteration) {
      matrix.contents(matrixLocation, new LiveCell());
    } else {
      // This is something we don't recognize -- do nothing.
    }
  }

}

function setCalculationTime (start, end) {
  var duration = end - start
  calcTime.innerHTML = duration + 'ms';
}

function addRandomLiveCell () {
  var randLoc = matrix.getRandomLocation();
  if (matrix.contents(randLoc) instanceof LiveCell) {
    addRandomLiveCell();
    return;
  }
  matrix.contents(randLoc, new LiveCell());
}

function addRandomLiveCells () {
  for(var i = 0; i < 500; i++) {
    addRandomLiveCell();
  }
}
