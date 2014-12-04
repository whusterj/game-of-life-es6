import * as utils from 'utils';


export default class MatrixLocation {

  constructor (row, col) {
    this.row = utils.isUndefined(row) ? null : row;
    this.col = utils.isUndefined(col) ? null : col;
  }

  getNeighbors () {
    return [
      this.aboveLeft(),
      this.above(),
      this.aboveRight(),
      this.left(),
      this.right(),
      this.belowLeft(),
      this.below(),
      this.belowRight()
    ];
  }

  _getRelativeLocation(deltaRow, deltaCol) {
    return new MatrixLocation(this.row + deltaRow, this.col + deltaCol);
  }

  aboveLeft () {
    return this._getRelativeLocation(-1, -1);
  }

  above () {
    return this._getRelativeLocation(-1,  0);
  }

  aboveRight () {
    return this._getRelativeLocation(-1,  1);
  }

  left () {
    return this._getRelativeLocation( 0, -1);
  }

  right () {
    return this._getRelativeLocation( 0,  1);
  }

  belowLeft () {
    return this._getRelativeLocation( 1, -1);
  }

  below () {
    return this._getRelativeLocation( 1,  0);
  }

  belowRight () {
    return this._getRelativeLocation( 1,  1);
  }

}