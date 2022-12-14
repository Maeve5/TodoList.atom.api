// atom state를 선언한 곳
// 전역 상태 => 어디서든 쓸 수 있다. props를 최대한 줄이기 위함. 데이터 접근에 용이함.

import { atom } from 'recoil';
// recoil : React를 위한 상태 관리 라이브러리
// atom : 상태(state)의 일부

const todoListState = atom({
    key : 'todoListState', // atom으로 선언한 모든 global state에 대해 모두 각자 고유값을 가져야 한다.
    default : [] // global state에 할당하는 기본값
});

export default todoListState;