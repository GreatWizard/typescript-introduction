// @ts-check

/** @type {(number | boolean)} */
var x;
x = 0; // OK
x = false;
x = "bonjour"; // Error, boolean is not assignable to number

/** @type {{a: number}} */
var obj = { a: 1 };
obj.b = 2; // Error, property 'b' does not exist on type '{ a: number; }'.

/**
 * @param {string}  p1 - A string param.
 * @param {string=} p2 - An optional param (Closure syntax)
 * @param {string} [p3] - Another optional param (JSDoc syntax).
 * @param {string} [p4="test"] - An optional param with a default value
 * @return {string} This is the result
 */
function stringsStringStrings(p1, p2, p3, p4) {
  // TODO
}

stringsStringStrings(); // Error, expected 1 argument, but got 0
stringsStringStrings(1, 2, 3, 4); // Error, types of arguments are not good
