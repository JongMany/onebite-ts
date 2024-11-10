/**
 * 인터페이스의 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isMeow: boolean;
}

interface Chicken extends Animal {
  name: '닭';
  isCrow: boolean;
}

interface DogCat extends Dog, Cat {}
