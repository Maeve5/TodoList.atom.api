import React from 'react';
import { useSetRecoilState } from 'recoil';
import todoListState from '../atom/todoListState';

const Editform = ({ row, editTodoList, setEditTodoList }) => {

    const {id, todo} = row;
    const setTodoList = useSetRecoilState(todoListState);

    // todo 수정
    const onEdit = (id, todo) => {
        const newList = JSON.parse(JSON.stringify(editTodoList));
        const changedList = newList.map((row) => {
            if (row.id === Number(id)) {
                return {...row, todo: todo}
            }
            return row;
        });
        setEditTodoList(changedList);
    };

    // todo 삭제
    const onDelete = (id) => {
        const newList = JSON.parse(JSON.stringify(editTodoList));
        const changedList = newList.filter((row) => {
            return (
                row.id !== Number(id)
                );
            });
        setTodoList(changedList);
        setEditTodoList(changedList);
    };
    
    return (
        <div>
            <input
                type='text'
                id={id}
                value={todo}
                onChange={(e) => {
                    onEdit(id, e.target.value)
                }}
                autoComplete='off'
            />
            <button
                id={id}
                onClick={(e) => {
                    onDelete(e.target.id)}}
            >X</button>
        </div>
    );
};

export default Editform;