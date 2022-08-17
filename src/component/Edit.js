import React, { useState, useRecoilValue } from 'react';
import todoListState from '../atom/todoListState';

function Edit() {

    const todoList = useRecoilValue(todoListState);

    // const newList = todoList.map((row) => {
    //     return (
    //         <
    //     );
    // })

    const Editform = ({ row }) => {
        const { id, todo } = row;

        const [data, setData] = useState(todo);

        const onEdit = () => {

        };

        const onDelete = () => {

        };

        return (
            <div>
                <input
                    type="text"
                    id={id}
                    name="todo"
                    value={data}
                    onChange={(e) => {
                        setData(e.target.value)
                    }}
                    className='todoInput'
                    placeholder='할 일을 입력하세요.'
                    autoComplete='off' />
                <input
                    type="button"
                    className="V btn"
                    id={id}
                    onClick={() => {
                        onEdit(id, data);
                    }}
                    value="V" />
                <input
                    type="button"
                    className="X btn"
                    id={id}
                    onClick={() => {
                        onDelete(id);
                    }}
                    value="X" />
            </div>
        );
    };

    return (
        <article>
            {todoList.map((row, idx) => {
                return (
                    <Editform
                        key={idx}
                        row={row}
                    />
                );
            })}
        </article>
    );
};

export default Edit;