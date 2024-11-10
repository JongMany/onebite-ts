/**
 * 클래스
 */

let studentA = {
  name: '이정환',
  grade: 'A+',
  age: 20,
  study() {
    console.log('공부중');
  },
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

let studentB = {
  name: '홍길동',
  grade: 'B',
  age: 50,
  study() {
    console.log('공부중');
  },
  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log('공부중');
  }

  introduce() {
    console.log(`안녕하세요! ${this.name}입니다.`);
  }
}

const studentC = new Student('이정환', 'A+', 20);
const studentD = new Student('홍길동', 'B', 50);

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 중`);
  }
}

const studentE = new StudentDeveloper('이정환', 'A+', 20, 'JavaScript');
