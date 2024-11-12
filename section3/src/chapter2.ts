/**
 * Unknown 타입 (전체 집합)
 */

function unknownExam() {
  // UpCasting 가능
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // DownCasting 불가능
  //   let num: number = unknownVar; // Error
  //   let str: string = unknownVar; // Error
  //   let bool: boolean = unknownVar; // Error
}

/**
 * Never (모든 집합의 부분집합 -> 공집합)
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // UpCasting 가능
  let num: number = neverFunc();
  let str: string = neverFunc();

  // DownCasting 불가능
  //   let n1: never = 10;
  //   let n2: never = "str";
}

/**
 * Void 타입 - Undefined의 수퍼 타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    // UpCasting 가능
    return undefined;
  }

  // UpCasting 가능
  let voidVar: void = undefined;
}

/**
 * Any 타입 - Unknown의 서브타입이자 치트키 타입 -> Never를 제외하고 모든 타입의 수퍼타입이자 서브타입으로 동작함
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // DownCasting이 가능하다! (단 Never 제외)
  anyVar = unknownVar;
  undefinedVar = anyVar;

  //   neverVar = anyVar;
}
