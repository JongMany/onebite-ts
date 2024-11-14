/**
 * 타입 추론
 */

let a: number = 10;
let b = 10; // 초깃값을 기반으로 number 타입으로 추론
let c = "hello";

// 함수의 반환 타입도 추론해준다. (return문 기반)
// 함수의 매개변수의 기본값이 설정된 경우, 매개변수를 추론해준다.
function func(message = "hello") {
  return "hello";
}

let d;
d = 10; //숫자로 추론
d.toFixed();

d = "hello"; // 문자열로 추론
d.toUpperCase();
d.toFixed(); // Error
