// 단일 타입들의 배열
let numArr1: number[] = [1, 2, 3];
let numArr2: Array<number> = [1, 2, 3];

let strArr1: string[] = ["Hello", "Im", "Winterlood"];

let boolArr1: boolean[] = [true, false, true];

// 다양한 타입들의 배열
let multiArr1: (string | number)[] = [1, "hello"];

// 다차원 배열의 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플 타입
// 길이와 타입이 고정된 배열
const tuple1: [number, number] = [1, 2];
const tuple2: [number, string, boolean] = [1, "1", true];
