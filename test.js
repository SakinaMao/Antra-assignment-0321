const arrr1 = [1, 2, 3, 4, 5];

//Array.map
Array.prototype.Map = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }
  return result;
};

//array.fitler
Array.prototype.filter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if ((cb(this[i]), i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log(arrr1.myfilter((item) => item > 3));

//Array.some
Array.prototype.some = function (cb) {
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      return (flag = true);
    }
  }
  return flag;
};
console.log(arrr1.some((item) => item > 0));

//Array.every
Array.prototype.every = function (cb) {
  let flag = false;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      flag = true;
    } else {
      return (flag = false);
    }
  }
  return flag;
};
console.log(arrr1.every((item) => item > 0));

//Array.find
Array.prototype.find = function (cb) {
  let result = undefined;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) result = this[i];
    if (result != undefined) break;
  }
  return result;
};

console.log(arrr1.find((item) => item > 5));
console.log(arrr1.find((item) => item > 2));

//Array.findIndex
Array.prototype.findIndex = function (cb) {
  let result = undefined;
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) result = i;
    if (result != undefined) break;
  }
  return result;
};

console.log(arrr1.findIndex((item) => item > 5));
console.log(arrr1.findIndex((item) => item > 2));

//Array.flat
let result = [];
const flatArray = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatArray(arr[i]);
    } else result.push(arr[i]);
  }
  return result;
};

const arr2 = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flatArray(arr2));

//Array.reduce
Array.prototype.reduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }
  return acc;
};

//arrr1 = [1, 2, 3, 4, 5];
const sum = arrr1.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);
