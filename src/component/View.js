import React from 'react';
import { useRecoilValue } from 'recoil';
import todoListState from '../atom/todoListState';

function View () {

    const setTodoList = useRecoilValue(todoListState);
 
    const ViewLists = 
        setTodoList.length ? 
        setTodoList.map((row, idx) => {
            return (
                <div key={idx}>
                    <input type='checkbox' id={row.id} />
                    <input
                        id={row.id}
                        value={row.todo}
                        readOnly
                    />
                </div>
            );
        }) :
        <p>ADD를 눌러 할 일을 추가하세요.</p>;

    return (
        <article>
            {ViewLists}
            {/* {
                setTodoList.length ?
                ViewLists :
                <p>ADD를 눌러 할 일을 추가하세요.</p>
            } */}
        </article>
    );
};

export default View;