/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isMeow: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return 'isBark' in animal;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    // Dog
    console.log('왈왈');
  } else {
    // Cat
    console.log('야옹');
  }
}
