import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import todoListState from '../atom/todoListState';
import API from '../modules/api';
import ViewList from './ViewList';

function View() {

    const [todoList, setTodoList] = useRecoilState(todoListState);
    // {id: number; todo: string; isCheck: boolean}[]
    
    // let response = [];

    // // 데이터 조회
    // const onGetTodoList = async () => {
    //     try {
    //         response = await API.get('/todo');
    //         setTodoList(response.data);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        API.get("/todo")
            .then(response => {
                setTodoList(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [setTodoList])

    // 체크 여부 유지
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

    // // 할 일 목록
    // const ViewList = todoList.map((row, idx) => {
    //     return (
    //         <div key={idx}>
    //             {/* 체크박스 */}
    //             <input
    //                 type='checkbox'
    //                 id={row.id}
    //                 checked={row.isCheck}
    //                 onChange={onCheck}
    //             />
    //             {/* 할 일 */}
    //             <input
    //                 id={row.id}
    //                 value={row.todo}
    //                 readOnly
    //             />
                
    //         </div>
    //     );
    // })

    return (
        <article>
            {
                todoList.length ?
                    // todoList가 있을 때
                    <ViewList todoList={todoList} onCheck={onCheck}/> :
                    // todoList가 없을 때
                    <p>ADD를 눌러 할 일을 추가하세요.</p>
            }
        </article>
    );
};

export default View;