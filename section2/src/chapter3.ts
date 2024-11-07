// object 타입
let user1: object = {
  id: 1,
  name: "이정환",
};

// user1.id // Error

// 객체 프로퍼티 타입
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

// Optional Property
let user3: {
  id?: number;
  name: string;
} = {
  name: "이정환",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
