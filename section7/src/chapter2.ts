/**
 * map 메서드
 */

function map<T, U>(arr: T[], callback: (item: T, index?: number) => U) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }
  return result;
}

const arr = map(["1", "2"], (value) => parseInt(value));

/**
 * forEach 메서드
 */

function forEach<T>(arr: T[], callback: (item: T, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach([1, 2, 3], (value) => value.toFixed());
