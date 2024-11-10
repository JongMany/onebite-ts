/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법
 */

// 버전들을 정의 -> 오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 구현부 -> 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(20);
  }
}

// func(); // Error
func(1); // 1번 버전의 오버로드 시그니처와 동일
// func(1, 2); // Error
func(1, 2, 3); // 2번 버전의 오버로드 시그니처와 동일
