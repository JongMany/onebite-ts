/**
 * 기본 타입 간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

// UpCasting이라 가능!
num1 = num2;

/**
 * 객체 타입 간의 호환성
 */
// Super 타입
type Animal = {
  name: string;
  color: string;
};

// Sub 타입
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "노랑",
};

let dog: Dog = {
  name: "돌돌이",
  color: "갈색",
  breed: "진도",
};

// UpCasting 가능
animal = dog;

// DownCasting 불가능
dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = Book & {
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};

// 가능
book = programmingBook;

// 불가능
// programmingBook = book;

// 에러 발생 (초과 프로퍼티 검사 - 초기화할 때, 객체 리터럴을 사용하면 초과 프로퍼티를 작성하면 안되도록 하는 것!)
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
};

// 꼼수 (다른 변수에 초기화하고, 할당하기)
let book3: Book = programmingBook;

function func(book: Book) {}

//에러 발생
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "react.js",
});

// 정상 동작
func(programmingBook);
