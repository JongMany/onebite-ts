/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};
let person = {} as Person; // Person으로 추론된다.
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// 초과 프로퍼티 검사가 발동하여 에러가 발생할 때, 타입 단언을 사용하면 에러를 사라지게 할 수 있다.
let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // 10이 never의 슈퍼 타입
let num2 = 10 as unknown; // 10이 unknown의 서브타입

let num3 = 10 as string; // 10이 string의 슈퍼타입이거나 서브타입이 아니기 때문이다.
let num4 = 10 as unknown as string;

/**
 * const 단언
 */
let num5 = 10 as const;
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

const authorLength: number = post.author?.length; // Error (number, undefined 타입이므로)
const authorLength2: number = post.author!.length; // Error (number, undefined 타입이므로)
