/**
 * Check if the given value is within the [`min`,`max`] interval.
 * @param min minimum value (included)
 * @param value tested value
 * @param max maximum value (included)
 */
export const inInterval = (min: number, value: number, max: number): boolean => {
  if (min > max) {
    throw `[Utils] Unexpected Input: expected "max" (${max}) to be greater than "min" (${min}).`;
  }

  return min <= value && value <= max;
};

/**
 * clamp a number between two values.
 * @param min minimum
 * @param value number to clamp
 * @param max maximum
 */
export const clamp = (min: number, value: number, max: number): number => {
  if (min > max) {
    throw `[Utils] Unexpected Input: expected "max" (${max}) to be greater than "min" (${min}).`;
  }

  return Math.min(Math.max(value, min), max);
};

/**
 * generate a random number in a given interval.
 * @param min minimum value.
 * @param max maximum value, exclusive.
 */
export const random = (min: number, max: number): number => {
  if (min > max) {
    throw `[Utils] Unexpected Input: expected "max" (${max}) to be greater than "min" (${min}).`;
  }

  const rnd = Math.random() * (max - min) + min;

  return Math.floor(rnd);
};

/**
 * calculate the distance between two points in a 2D space
 */
export const distance2D = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2);
};

/**
 * calculate the distance between two points in a 3D space
 */
export const distance3D = (
  x1: number,
  y1: number,
  z1: number,
  x2: number,
  y2: number,
  z2: number
): number => {
  return Math.sqrt(Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2 + Math.abs(z1 - z2) ** 2);
};
