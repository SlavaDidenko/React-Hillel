import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    asyncListActionCreator, setCurrentActionCreator,
    setErrorActionCreator,
    setTypeActionCreator,
    toggleLoaderActionCreator
} from "./store/reducers/starWarReducers";
import './App.sass'
import {BarLoader} from "react-spinners";
import Card from "./components/Card";

const App = () => {
    const dispatch = useDispatch();
    const {listStarWars, loading, error,type} = useSelector(store => store.star);
    const arrTypes = ["people", "planets", "starships"]

    useEffect(() => {
        dispatch(asyncListActionCreator());
    },[])

    useEffect(() => {
        if (listStarWars.length) dispatch(setCurrentActionCreator(listStarWars[0]));
    },[listStarWars])

    const setList = (type) => {
        try {
            dispatch(toggleLoaderActionCreator());
            dispatch(setTypeActionCreator(type));
            dispatch(asyncListActionCreator());
        } catch (e){
            dispatch(setErrorActionCreator());
        }
    }

    const setCurrent = (data) => {
        dispatch(setCurrentActionCreator(data));
    }

    return (
        <div className="center container">
            <div className="tabs">
                {
                    arrTypes.map((el ,i) => (
                        <button key={i} className={`tab ${type === el? "active"  : ""}`} onClick={() => setList(el)} type="button">{el}</button>
                    ))
                }
            </div>
            <div className="row">
                <ul className="list">
                    {
                        error ?
                            <div>OOOOPS!</div>
                        :
                            loading ?
                                <BarLoader/>
                            :
                                listStarWars?.map( item => (
                                  <div onClick={() =>setCurrent(item)} key={item.name}> {item.name}</div>
                                ))
                    }
                </ul>
                {loading?
                    <div>Skeleton</div>
                    :
                    <Card/>
                }
            </div>

        </div>
    );
};

export default App;
