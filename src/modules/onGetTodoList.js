import API from "./api";

const onGetTodoList = async () => {
    try {
        const response = await API.get('/todo');
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
};

export default onGetTodoList;