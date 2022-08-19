import React, { useState, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import todoListState from '../atom/todoListState';
import View from './View';

let id = 0;
const getId = () => {
    return id++;
}

function Add() {

    const [newTodo, setNewTodo] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    const input = useRef(null);

    // 입력한 todo값 받아오기
    const onChange = ({ target: { value } }) => {
        setNewTodo(value);
    };

    // Add 버튼 클릭
    const onAdd = () => {
        newTodo ?
            // todo값이 있을 때
            setTodoList((row) => [
                ...row,
                {
                    id: getId(),
                    todo: newTodo,
                    isCheck: false
                }
            ]) :
            // todo값이 없을 때
            alert('할 일을 입력하세요.');

        // todo값 초기화
        setNewTodo('');
        // 자동 포커스
        input.current.focus();
    };

    // useCallback, useMemo, React.memo 활용하기

    return (
        <>
            <View />
            <article>
                <input
                    type='text'
                    placeholder='할 일을 입력하세요.'
                    value={newTodo}
                    onChange={onChange}
                    autoFocus
                    ref={input}
                />
                <button onClick={onAdd}>Add</button>
            </article>
        </>
    );
};

export default Add;