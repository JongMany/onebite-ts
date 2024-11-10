/**
 * Exclude<T, U>
 * T에서 U를 제외한 타입을 만들어주는 유틸리티 타입
 */

type Exclude<T, U> = T extends U ? never : T;

// Exclude<string, boolean> | Exclude<boolean, boolean>
// => string | never => string
type A = Exclude<string | boolean, boolean>; // string

/**
 * Extract<T, U>
 * T에서 U에 할당 가능한 타입을 추출하는 유틸리티 타입
 */

type Extract<T, U> = T extends U ? T : never;

// Extract<string, boolean> | Extract<boolean, boolean>
// => never | boolean => boolean
type B = Extract<string | boolean, boolean>; // boolean

/**
 * ReturnType<T>
 * 함수 타입의 반환 타입을 가져오는 유틸리티 타입
 */

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function getUserInfo() {
  return { name: 'mike', age: 23 };
}

type Info = Parameters<typeof getUserInfo>; // []
