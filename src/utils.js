/// Custom Utilities

export function isUndefined (value) {
  return typeof(value) === 'undefined';
}

export function isNull (value) {
  return value === null;
}

export function randomInt (max) {
  if (isUndefined(max)) {
    throw new MissingParameter('Max value not set.');
  }
  return Math.floor(Math.random() * max);
}