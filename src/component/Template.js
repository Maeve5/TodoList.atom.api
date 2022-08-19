import React from 'react';
import Nav from './Nav';
// import API from '../modules/api';

function Template() {

    // const onGetTodoList = async () => {
    //     try {
    //         const response = await API.get('/posts');
    //         console.log(response);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // };

    // const [posts, setPosts] = useState([]);
    // const [errorMsg, setErrorMsg] = useState('');

    // const onGetTodoList = () => {
    //     API.get('/posts')
    //         .then(response => {
    //             console.log(response);
    //             setPosts(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //             setErrorMsg('Error retreiving data');
    //         })}

    
    return (
        <main>
            <header>To do List</header>
            {/* {posts.length ?
                posts.map((row) => row.title) :
                null}
            {errorMsg ? errorMsg : null} */}
            <Nav />
        </main>
    );
};

export default Template;