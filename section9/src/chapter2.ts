/**
 * infer - 조건부 타입 내에서 타입 추론하기
 */

{
  type ReturnType<T> = T extends () => string ? string : never;

  type FuncA = () => string;
  type A = ReturnType<FuncA>; // string

  type FuncB = () => number;
  type B = ReturnType<FuncB>; // never
}

{
  type ReturnType<T> = T extends () => infer R ? R : never;

  type FuncA = () => string;
  type A = ReturnType<FuncA>; // string

  type FuncB = () => number;
  type B = ReturnType<FuncB>; // number

  type C = ReturnType<number>; // never
}

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type PromiseA = PromiseUnpack<Promise<number>>; // number
type PromiseB = PromiseUnpack<Promise<string>>; // string
type PromiseC = PromiseUnpack<string>; //never
