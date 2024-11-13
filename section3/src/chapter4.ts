// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합 타입과 교집합 타입이 존재

// 1. 합집합 - Union 타입
let a: string | number | boolean;
a = "string";
a = 1;
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

const person: Union1 = {
  name: "이종민",
  language: "한국어",
};

const dog: Union1 = {
  name: "마루",
  color: "갈색",
};

const personDog: Union1 = {
  name: "마루",
  color: "갈색",
  language: "멍멍어",
};

// const union: Union1 = {
//   name: "",
// }; //Error

// 2. 교집합 타입 (Intersection 타입)
let variable: number & string; // never 타입 -> 불가능한 타입 / 공집합

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "이종민",
  color: "",
  language: "",
};
