import React, { useEffect, useState } from 'react';
import View from './View';
import Add from './Add';

function Nav () {

    const navList = ['view', 'add', 'edit']
    const [mode, setMode] = useState('view');
    const [content, setContent] = useState(null);
    
    // 메뉴탭 클릭 시 모드 변경
    const onClick = (e) => {
        e.preventDefault();
        setMode(e.target.title);
    }

    // 모드 별 
    useEffect(() => {
        switch (mode) {
            case 'view':
                setContent(<View />);
                break;
            case 'add':
                setContent(<Add />);
                break;
            case 'edit':
                setContent();
                break;
            default:
                setContent(null);
                break;
        }
    }, [mode]);

    return (
        <div>
            {navList.map((row, idx) => {
                return(
                <a
                    key={idx}
                    title={row}
                    href={'/'+row}
                    // className={`navlist ${}`}
                    onClick={onClick}
                >{row}</a>)
            })}
            {content}
        </div>
    );
};

export default Nav;