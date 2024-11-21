/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> | StringNumberSwitch<string> 이 된다.

let d: StringNumberSwitch<number | string | boolean>;
// StringNumberSwitch<number> | StringNumberSwitch<string> | StringNumberSwitch<boolean> 이 된다.
// => number | string | number => number | string

/**
 * 실용 예제
 */

// #1 - 특정 타입을 제거하는 유틸리티 타입 만들기
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// Exclude<number , string> | Exclude<string , string> | Exclude<boolean , string>
// number | never | boolean  => number | boolean (never는 공집합으므로 제거된다)

// #2
type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>;
// Extract<number , string> | Extract<string , string> | Extract<boolean , string>
// never | string | never => string

// 만약 분산 조건 처리가 안되도록 하려면? 대괄호 사용
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;
let e: StringNumberSwitch2<number | string>; // number
