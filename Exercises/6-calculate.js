'use strict';

const square = (number) => number ** 2;

const cube = (number) => number ** 3;

const average = (firstNum, secondNum) => firstNum + secondNum / 2;

const calculate = () => {
  const arr = [];
  for (let index = 0; index < 9; index++) {
    const squareOfNumber = square(index);
    arr.push(squareOfNumber);
    const cubeOfNumber = cube(index);
    arr.push(cube);
    const average = this.average(squareOfNumber, cubeOfNumber);
    arr.push(average);

  }
  return arr;
};

module.exports = { square, cube, average, calculate };
