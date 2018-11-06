import { updateName } from '../actions/userAction';
import { call, takeLatest, put, all, takeEvery } from 'redux-saga/effects';

//普通の関数
const getHello = async () => {
    const response  = await fetch('http://www.bluecode.jp/test/api.php');
    const json = await response.json();
    return json;
}

//通常関数を呼び出してディスパッチ
function* requestHello(action){
    const json = yield call(getHello);
    yield put(updateName(json.message + ' saga'));
}

//複数の関数をまとめる
const helloSagas = [
    takeLatest('GET_HELLO_SAGA', requestHello)
];


//呼び出しのルート
export default function* rootSaga(){
    yield all([
        ...helloSagas,
    ]);
}