/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void; // 함수 타입 표현식
  sayHi(name: string): void; // Error
}

const person: Person = {
  name: '김사람',
  age: 20,
  sayHi: () => {
    console.log('안녕하세요');
  },
};

// 인터페이스 호출 시그니처
interface Operator {
  (a: number, b: number): number;
}

const add: Operator = (a, b) => a + b;
