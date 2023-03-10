import axios from "axios";
import {store} from "../store";


export class StarWars {
    static getStarData = () => {
        const {type} = store.getState().star

        const resp = axios.get(`https://swapi.dev/api/${type}`)
        return resp
    }
}