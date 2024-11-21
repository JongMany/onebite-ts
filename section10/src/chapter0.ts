/**
 * Partial<T>
 * - 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: "제목 나중에 짓자",
  content: "초안",
};

/**
 * Required<T>
 * - 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: "한 입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T>
 * - 특정 객체 타입의 모든 프로퍼티를 읽기전용 프로퍼티로 바꿔주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};
