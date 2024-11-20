/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person1: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person1, "name");

/**
 * typeof 연산자
 */

const person2 = {
  name: "이정환",
  age: 27,
};

type PersonType = typeof person2;
function getPropertyKey2(person: typeof person2, key: keyof typeof person2) {
  return person[key];
}
