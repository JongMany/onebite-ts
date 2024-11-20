/**
 * 조건부 타입
 */
type A = number extends string ? string : number; // number

type ObjA = { a: number }; // 슈퍼타입
type ObjB = { a: number; b: number }; // 서브 타입

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number
let varC: StringNumberSwitch<number | string>; // string | number

// 문제 상황
{
  function removeSpaces(text: string | undefined | null) {
    if (typeof text === "string") return text.replaceAll(" ", "");
    else return undefined;
  }

  let result = removeSpaces("hi im winterlood");
  result?.toUpperCase();
}

// 1차 해결
{
  function removeSpaces<T>(text: T): T extends string ? string : undefined {
    // 함수 내부에서는 조건부 타입의 결과를 알 수 없다
    if (typeof text === "string") return text.replaceAll(" ", "") as any;
    else return undefined as any;
  }

  let result = removeSpaces("hi im winterlood");
  result.toUpperCase();

  let result2 = removeSpaces(undefined);
}

// 완전 해결
{
  function removeSpaces<T>(text: T): T extends string ? string : undefined;
  function removeSpaces(text: any) {
    // 함수 내부에서는 조건부 타입의 결과를 알 수 없다
    if (typeof text === "string") return text.replaceAll(" ", "");
    else return undefined;
  }

  let result = removeSpaces("hi im winterlood");
  result.toUpperCase();

  let result2 = removeSpaces(undefined);
}
