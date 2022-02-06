'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  const oddArr = [];

  for (let index = start; index <= end; index++) {
    const element = arr[index];
    if (element % 2 !== 0) {
      oddArr.push(element);
    }

  }
  return oddArr;
};

module.exports = { rangeOdd };
