// function currying

let sum = (a, b, c) => a + b + c;

function curry(fn) {
  return function _(...args) {
    if (args.length === fn.length) {
      return fn(...args);
    }
    return function (...newArgs) {
      return _(...args, ...newArgs);
    };
  };
}

curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));

// Polyfill for map

Array.prototype.customMap = function (callback, thisContext) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback.call(thisContext, this[i], i, this);
    }
  }
  return result;
};

//Polyfill for the filter

Array.prototype.customFilter = function (callback, thisContext) {
  let result = [];
  for (i = 0; i < this.length; i++) {
    if (i in this && callback.call(thisContext, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

let nums = [1, 2, 3, 4];

console.log(nums.customFilter((item, _) => item % 2 === 1));

//pollyfill for reduce

Array.prototype.reduce = function (callback, init, thisContext) {
  let acc = init;
  for (i = 0; i < this.length; i++) {
    console.log(typeof callback);
    acc = callback.call(thisContext, acc, this[i], i, this);
  }
  return acc;
};

let prod = nums.reduce((acc, item) => acc * item, 1);
console.log("prod", prod);

// polyfill for slice
