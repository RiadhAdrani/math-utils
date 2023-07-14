import { it, expect, describe } from 'vitest';
import { inInterval, clamp, random, distance2D, distance3D } from './index.js';

describe('inInterval', () => {
  it.each([[5, 5, 4]])(
    'should refuse bad inputs and combinations : "%s" < "%s" < "%s"',
    (min, value, max) => {
      expect(() => inInterval(min as number, value as number, max as number)).toThrow();
    }
  );

  it.each([
    [5, 6, 5, false],
    [1, 6, 5, false],
    [1, 1.5, 5, true],
    [1, 0.5, 5, false],
  ])('should compute result : "%s" < "%s" < "%s" => "%s"', (min, value, max, expected) => {
    expect(inInterval(min, value, max)).toBe(expected);
  });
});

describe('clamp', () => {
  it.each([[10, 2, 5]])('should throw', (min: unknown, n: unknown, max: unknown) => {
    expect(() => clamp(min as number, n as number, max as number)).toThrow();
  });

  it.each([
    [1, 2, 5, 2],
    [3, 2, 5, 3],
    [3, 10, 5, 5],
  ])(
    'should clamp given number (%s) > (%s) < (%s) => (%s)',
    (min: number, n: number, max: number, expected: unknown) => {
      expect(clamp(min, n, max)).toStrictEqual(expected);
    }
  );
});

describe('random', () => {
  it('should return a number between min and max', () => {
    const rnd = random(0, 5);

    expect(inInterval(0, rnd, 5)).toBe(true);
  });

  it('should return an integer', () => {
    const rnd = random(1, 2);

    expect(rnd).toBe(1);
  });

  it('should throw when max is less than min', () => {
    expect(() => random(5, 0)).toThrow();
  });
});

describe('distance', () => {
  it.each([
    [[0, 0, 0, 0], 0],
    [[1, 0, 0, 0], 1],
    [[1, 1, 0, 0], 1.41],
    [[1, 1, -1, -1], 2.82],
    [[-1, -1, 0, 1], 2.23],
  ])('should calculate distance 2d', (input, expected) => {
    const res = Math.trunc(distance2D(...(input as [number, number, number, number])) * 100) / 100;

    expect(res).toBe(expected);
  });

  it.each([
    [[0, 0, 0, 0, 0, 0], 0],
    [[1, 0, 0, 0, 0, 0], 1],
    [[1, 1, 1, 0, 0, 0], 1.73],
    [[7, 4, 3, 17, 6, 2], 10.24],
    [[-9, 23.62, -3, 23, -8.33, 33], 57.79],
  ])('should calculate distance 2d', (input, expected) => {
    const res =
      Math.trunc(distance3D(...(input as [number, number, number, number, number, number])) * 100) /
      100;

    expect(res).toBe(expected);
  });
});
