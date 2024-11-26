/**
 * Created by Julian on 2024-11-26.
 */

import {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher,
} from "./exercise";

test("First letter of a string should be capitalized", () => {
  expect(capitalize("julian")).toBe("Julian");
});

test("The string is reversed", () => {
  expect(reverseString("abcdefgh")).toBe("hgfedcba");
});

test("The calculator should perform basic operations such as addition, subtraction, multiplication, and division", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(5, 2)).toBe(3);
  expect(calculator.multiply(2, 3)).toBe(6);
  expect(calculator.divide(10, 2)).toBe(5);
});

test("The analyzeArray function should return an object with the average, min, max, and length of an array as properties", () => {
  expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test(" function that takes a string and a shift factor and returns it with each character shifted", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
