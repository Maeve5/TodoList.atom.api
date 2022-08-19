import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import todoListState from '../atom/todoListState';
import Editform from './Editform';

function Edit() {

    const [todoList, setTodoList] = useRecoilState(todoListState);

    // 수정된 목록 임시저장
    const [editTodoList, setEditTodoList] = useState(JSON.parse(JSON.stringify(todoList)));
    
    // 수정된 목록 atom에 저장
    const onSave = () => {
        setTodoList(editTodoList)
    };

    return (
        <article>
            {editTodoList.map((row, idx) => {
                return (
                    <Editform
                        key={idx}
                        row={row}
                        editTodoList={editTodoList}
                        setEditTodoList={setEditTodoList}
                    />
                )
            })}
            <button onClick={onSave}>Save</button>
        </article>
    );
};

export default Edit;