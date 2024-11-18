/**
 * 타입 변수 응용하기
 */

// 1
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, 2);

// 2
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
let str = returnFirstValue(["hello", "mynameis"]);

function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
let num1 = returnFirstValue([1, "hello", "mynameis"]); // string | number
let num2 = returnFirstValue2([1, "hello", "mynameis"]); // number

// 3
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });

// let var4 = getLength(10); // Error
