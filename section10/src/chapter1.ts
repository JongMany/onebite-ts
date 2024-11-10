/**
 * Pick<T, K>
 * 객체 타입에서 특정 프로퍼티만 뽑는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 컨텐츠',
};

/**
 * Omit<T, K>
 * 객체 타입에서 특정 프로퍼티를 제거하는 타입
 */

const noTitlePost1: Pick<Post, 'content' | 'tags' | 'thumbnailURL'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const noTitlePost2: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

/**
 * Record<K, V>
 */
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// keyof any: 어떤 객체의 키 유니온 타입
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  'large' | 'medium' | 'small' | 'watch',
  { url: string }
>;
