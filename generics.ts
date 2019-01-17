function identity<T>(arg: T): T {
  return arg;
}

// type of output will be 'string'
let output1 = identity<string>("myString");

// Error, "myString" is not assignable to parameter of type 'number'
let output2 = identity<number>("myString");

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};
