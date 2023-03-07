import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import rootWatchers from "../saga/watchers";


const saga = createSagaMiddleware()


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(saga)))

saga.run(rootWatchers)