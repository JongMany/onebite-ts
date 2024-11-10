/**
 * 함수 타입 표현식
 */
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

const add2: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니처 (Call Signature)
 */

// JavaScript에서 함수도 객체이므로, 객체의 형태를 띄게 된다.
type Operation2 = {
  (a: number, b: number): number;
};

const add3: Operation2 = (a, b) => a + b;
const sub3: Operation2 = (a, b) => a - b;
const mul3: Operation2 = (a, b) => a * b;
const div3: Operation2 = (a, b) => a / b;
