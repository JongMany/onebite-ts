// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknownVar.toFixed(); // Error
if (typeof unknownVar === "number") {
  unknownVar.toFixed();
}
