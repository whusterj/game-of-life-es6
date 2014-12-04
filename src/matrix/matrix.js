import MatrixSize from 'matrix/matrixSize';
import MatrixLocation from 'matrix/matrixLocation';
import { MissingParameter } from 'exceptions';
import * as utils from 'utils';


const EMPTY_VALUE = null;


export default class Matrix {

  constructor (matrixSize) {
    this.matrix;
    this.size = matrixSize;
    this.buildMatrix(EMPTY_VALUE);
  }

  fill (value) {
    var self = this;
    this.matrix = this.matrix.map(function (row){
      return self._fillRow(row, value);
    });
  }

  empty () {
    this.matrix = this.matrix.map(this._emptyRow);
  }

  getRandomLocation () {
    var row = utils.randomInt(this.size.height),
        col = utils.randomInt(this.size.width);
    return new MatrixLocation(row, col);
  }

  getValue(matrixLocation) {
    try {
      return this.matrix[matrixLocation.row][matrixLocation.col];
    } catch (e) {
      // Location does not exist
      //console.log('Location does not exist in this matrix');
      return false;
    }
  }

  setValue(matrixLocation, item) {
    return this.matrix[matrixLocation.row][matrixLocation.col] = item;
  }

  contents (matrixLocation, item) {
    if (utils.isUndefined(item)) {
      // treat as getter
      return this.getValue(matrixLocation);
    }
    
    // treat as setter
    return this.setValue(matrixLocation, item);
  }

  buildMatrix (initValue) {
    var self = this;
    this.matrix = _.range(self.size.height).map(function () {
      return _.range(self.size.width).map(function () {
        return initValue;
      });
    });
  }

  _renderValueToString (value) {
    var emptyString = ' . '

    if (utils.isUndefined(value) || utils.isNull(value)) {
      return emptyString;
    } else if (typeof(value) === 'object') {
      try {
        return ' ' + value.renderToString() + ' ';
      } catch (e) {
        // console.log('Object could not be rendered to string:', e, value);
        return emptyString;
      }
    } else {
      matrixString += ' ' + value + ' ';
    }
  }

  renderToString () {
    var matrixString = '';

    for (var row = 0; row < this.matrix.length; row++) {
      for (var col = 0; col < this.matrix[row].length; col++) {
        var value = this.matrix[row][col];
        matrixString += this._renderValueToString(value);
      }
      matrixString += '\n';
    }

    return matrixString;
  }

  getLocations () {
    var locations = [];

    for (var row = 0; row < this.matrix.length; row++) {
      for (var col = 0; col < this.matrix[row].length; col++) {
        locations.push(new MatrixLocation(row, col));
      }
    }

    return locations;
  }

  getNeighborsOf (matrixLocation) {

    var neighbors = [],
        neighborLocations = matrixLocation.getNeighbors();

    for(let neighborLocation of neighborLocations) {
      neighbors.push(this.contents(neighborLocation));
    }

    return neighbors;
  }

  ///
  _fillRow (row, item) {
    return row.map(function () {
      if (typeof(item) === 'function') {
        return new item();
      } else {
        return item;
      }
    });
  }

  _emptyRow (row) {
    return this._fillRow(row, EMPTY_VALUE);
  }

}
