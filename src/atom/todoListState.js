import { atom } from 'recoil';

const todoListState = atom({
    key : 'todoListState', // atom으로 선언한 모든 global state에 대해 모두 각자 고유값을 가져야 한다.
    default : [] // global state에 할당하는 기본값
});

export default todoListState;