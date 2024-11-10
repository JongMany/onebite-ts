/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
 */

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님의 포인트는 {point}점 입니다.
// Guest -> {name}님은 {visitCount}번 방문했습니다.
/* function login(user: User) {
  if ('kickCount' in user) {
    // admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ('point' in user) {
    // member
    console.log(`${user.name}님의 포인트는 ${user.point}점 입니다.`);
  } else {
    // guest
    console.log(`${user.name}님은 ${user.visitCount}번 방문했습니다.`);
  }
} */

function login(user: User) {
  if (user.tag === 'ADMIN') {
    // admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === 'MEMBER') {
    // member
    console.log(`${user.name}님의 포인트는 ${user.point}점 입니다.`);
  } else {
    // guest
    console.log(`${user.name}님은 ${user.visitCount}번 방문했습니다.`);
  }
}

// 한 번 더 연습
// 비동기 작업의 결과를 처리하는 객체

type Loading = {
  state: 'LOADING';
};

type Failed = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type Success = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask = Loading | Failed | Success;

function processResult(task: AsyncTask) {
  if (task.state === 'LOADING') {
    console.log('로딩중입니다.');
  } else if (task.state === 'FAILED') {
    console.log(`에러가 발생했습니다. ${task.error.message}`);
  } else {
    console.log(`성공했습니다. ${task.response.data}`);
  }
}
