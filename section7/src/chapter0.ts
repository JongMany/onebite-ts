/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

const numb = func(10);

const bool = func(true);

const str = func("str");

const arr = func<[number, number, number]>([1, 2, 3]);
