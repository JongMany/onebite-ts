/**
 * 함수 타입 정의
 */

import { blob } from 'stream/consumers';

function func(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의
const add = (a: number, b: number): number => a + b;

// 함수의 매개변수
// 매개변수는 기본값을 기준으로 추론해준다.
// 선택적 매개변수는 필수 매개변수 뒤에만 올 수 있다.
function introduce(name = '이정환', tall?: number) {
  console.log(`안녕하세요. ${name}입니다.`);
  if (typeof tall === 'number') {
    console.log(`키는 ${tall}cm 입니다.`);
  }
}

function getSum(...rest: number[]) {
  return rest.reduce((acc, current) => acc + current, 0);
}
