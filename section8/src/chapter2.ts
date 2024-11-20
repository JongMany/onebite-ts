/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]?: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 26,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // 수정하는 비즈니스 로직
}

updateUser({
  age: 24,
});
