/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로, 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value -> number인 경우 toFixed / string인 경우 toUpperCase / Date인 경우 getTime / Person인 경우 name은 age 살입니다.
function func(value: number | string | Date | Person | null) {
  if (!value) return;
  if (typeof value === "number") {
    // value의 타입이 Number 타입으로 추론
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    // value의 타입이 String 타입으로 추론
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    console.log(value.getTime());
  } else if ("age" in value && "name" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
