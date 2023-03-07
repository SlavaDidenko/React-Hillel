import axios from "axios";
import {useSelector} from "react-redux";
import {store} from "../store";


export class StarWars {
    static getStarData = () => {
        const {type} = store.getState().star

        const resp = axios.get(`https://swapi.dev/api/${type}`)
        return resp
    }

    static getCurrentStarData = () => {
        const {type,current} = store.getState().star

        const resp = axios.get(`https://swapi.dev/api/${type}/${current}`)
        return resp
    }
}