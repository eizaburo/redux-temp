export const updateName = name => {
    return {
        type: 'UPDATE_NAME',
        name: name
    }
}

export const getHelloThunk = () => async dispatch => {

    const response  = await fetch('http://www.bluecode.jp/test/api.php');
    const json = await response.json();

    dispatch({
        type: 'GET_HELLO_THUNK',
        name: json.message
    });
}

export const getHelloSaga = () => {
    return {
        type: 'GET_HELLO_SAGA',
    }
}