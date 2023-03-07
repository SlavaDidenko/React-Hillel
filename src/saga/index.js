import {all} from 'redux-saga/effects'
import {starWarsWatcher} from "./asyncStarWars";


export default function* rootWatchers () {
    yield all([
        starWarsWatcher(),
    ])
}