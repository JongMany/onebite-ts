/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가?
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // Error

// 기준2. 매개변수의 타입이 호환되는가?
// 2-1. 매개변수의 개수가 같은가?

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업캐스팅 * Error
d = c; // 다운 캐스팅

type Animal = {
  name: string;
};

// 서브 타입
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.color);
  console.log(dog.color);
};

animalFunc = dogFunc; // 업캐스팅 * Error
// 위의 코드가 허용된다면 아래의 코드처럼 동작된다.
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color);
};

dogFunc = animalFunc; // 다운 캐스팅
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를때
type E = (a: number, b: string) => void;
type F = (a: number) => void;

let func1: E = (a, b) => {};
let func2: F = (a) => {};

func1 = func2;
func2 = func1; // Error
