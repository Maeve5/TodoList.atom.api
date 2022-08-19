import React from 'react';

function ViewList ({ todoList, onCheck }) {
    return (
            <div>
                {todoList.map((row, idx) => {
                    return(
                    <div key={idx}>
                    {/* 체크박스 */}
                    <input
                        type='checkbox'
                        id={row.id}
                        checked={row.isCheck}
                        onChange={onCheck}
                    />
                    {/* 할 일 */}
                    <input
                        id={row.id}
                        value={row.todo}
                        readOnly
                    /></div>)
                })}
            </div>
    );
};

export default ViewList;