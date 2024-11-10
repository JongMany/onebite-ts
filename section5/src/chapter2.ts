/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: '김사람',
  age: 20,
};

/**
 * 모듈 보강
 */
interface Lib {
  a: number;
  b: number;
}

// 모듈 타입을 보강
interface Lib {
  c: string;
}
const lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
};
