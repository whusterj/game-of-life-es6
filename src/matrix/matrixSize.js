import * as settings from 'matrix/settings';

export default class MatrixSize {

  constructor (width, height) {
    this.width  = width  || settings.DEFAULT_MATRIX_SIZE;
    this.height = height || settings.DEFAULT_MATRIX_SIZE;
  };

  double () {
    this.width  = _doubleSize(this.width);
    this.height = _doubleSize(this.height);
  };

  ///

  _doubleSize (size) {
    return Math.min(size * 2, settings.MAX_MATRIX_SIZE);
  }

}
