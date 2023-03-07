import {takeEvery, call,put} from 'redux-saga/effects';
import {StarWars} from "../API/StarWars";
import {ASYNC_START_DATA, setErrorActionCreator, setListActionCreator} from "../store/reducers/starWarReducers";


function* starWarsWorker () {
    try {
        const response = yield call(StarWars.getStarData)
        yield put(setListActionCreator(response.data.results))
    }
    catch(error) {
        yield put(setErrorActionCreator())
    }
}

export function* starWarsWatcher () {
    yield takeEvery(ASYNC_START_DATA, starWarsWorker)
}