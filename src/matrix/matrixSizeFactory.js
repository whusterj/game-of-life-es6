import MatrixSize from 'matrix/matrixSize';
import * as settings from 'matrix/settings';
import * as utils from 'utils'; 

export default {
    random,
    square,
    small,
    medium,
    large,
    extraLarge
};

function random (max) {
  return new MatrixSize(_getRandomSize(max),
                        _getRandomSize(max)); 
}

function square (size) {
  return new MatrixSize(size, size);
}

function small () {
  return square(settings.SMALL_MATRIX_SIZE);
}

function medium () {
  return square(settings.MEDIUM_MATRIX_SIZE);
}

function large () {
  return square(settings.LARGE_MATRIX_SIZE);
}

function extraLarge () {
  return square(settings.EXTRA_LARGE_MATRIX_SIZE);
}

///

function _getRandomSize (max) {
  return utils.randomInt(max || settings.MAX_MATRIX_SIZE);
}
