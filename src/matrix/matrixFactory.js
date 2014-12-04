import Matrix from 'matrix/matrix';
import MatrixSizeFactory from 'matrix/matrixSizeFactory';


export default {
  random,
  small,
  medium,
  large,
  extraLarge
};


function random (max) {
  return new Matrix(MatrixSizeFactory.random(max));
}

function small () {
  return new Matrix(MatrixSizeFactory.small());
}

function medium () {
  return new Matrix(MatrixSizeFactory.medium());
}

function large () {
  return new Matrix(MatrixSizeFactory.large());
}

function extraLarge () {
  return new Matrix(MatrixSizeFactory.extraLarge());
}