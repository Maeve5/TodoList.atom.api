import React from 'react';
import { useRecoilState } from 'recoil';
import todoListState from '../atom/todoListState';

function View() {

    const [todoList, setTodoList] = useRecoilState(todoListState);

    const onCheck = (e) => {
        const checked = e.target;
        const newList = JSON.parse(JSON.stringify(todoList));

        const checkList = newList.map((row) => {
            if (row.id === Number(checked.id) && row.todo) {
                return {
                    ...row,
                    todo: row.todo,
                    isCheck: checked.checked
                };
            };
            return row;
        })
        setTodoList(checkList);
    };

    const ViewList = todoList.map((row, idx) => {
        return (
            <div key={idx}>
                <input
                    type='checkbox'
                    id={row.id}
                    checked={row.isCheck}
                    onChange={onCheck}
                />
                <input
                    id={row.id}
                    value={row.todo}
                    readOnly
                />
            </div>
        );
    })

    return (
        <article>
            {
                todoList.length ?
                    ViewList :
                    <p>ADD를 눌러 할 일을 추가하세요.</p>
            }
        </article>
    );
};

export default View;