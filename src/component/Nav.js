import React, { useState } from 'react';
import View from './View';
import Add from './Add';
import Edit from './Edit';
import '../App.css';

function Nav() {

    const navList = ['view', 'add', 'edit']
    const [mode, setMode] = useState('view');
    // const [content, setContent] = useState(null);

    // 메뉴탭 클릭 시 모드 변경
    const onClick = (e) => {
        e.preventDefault();
        setMode(e.target.title);
    }

    // 모드 별 
    // useEffect(() => {
    //     switch (mode) {
    //         case 'view':
    //             setContent(<View />);
    //             break;
    //         case 'add':
    //             setContent(<Add />);
    //             break;
    //         case 'edit':
    //             setContent(<Edit />);
    //             break;
    //         default:
    //             setContent(null);
    //             break;
    //     }
    // }, [mode]);
    // 연산이 복잡해질 수 있음
    // 컴포넌트에 조건이 붙으면 return 안에 해결하는 게 좋다.

    return (
        <>
            <nav>
                {navList.map((row, idx) => {
                    return (
                        <a
                            key={idx}
                            title={row}
                            href={'/' + row}
                            // className={`navlist ${}`}
                            onClick={onClick}
                        >{row}</a>)
                })}
            </nav>
            <section>{mode === 'view' ? <View/> : mode === 'edit' ? <Edit/> : <Add/>}</section>
        </>
    );
};

export default Nav;