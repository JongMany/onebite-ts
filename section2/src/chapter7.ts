// void : 공허 = 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

// 변수가 void 타입인 경우, undefinded 이외의 타입은 할당이 불가능하다.

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined;

// never -> 존재하지 않은 = 불가능한 타입
function func3(): never {
  while (true) {}
}
function func4(): never {
  throw new Error();
}
