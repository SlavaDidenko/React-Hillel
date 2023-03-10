import React, {useEffect} from 'react';
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
import {useUser} from "./context/userContext";

const App = () => {
    const dispatch = useDispatch();
    const {listStarWars, loading, error,type} = useSelector(store => store.star);
    const {changeTheme,theme,dataLang,setLang} = useUser();
    const arrTabs = dataLang.tabs;
    const arrTypes = ["people", "planets", "starships"];


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
        <div className={`center container ${theme}`}>
            <div className="row">
                <select onChange={e => setLang(e.target.value)}>
                    <option value="ukr">Ukr</option>
                    <option value="eng">Eng</option>
                </select>
                <input
                    onChange={changeTheme}
                    type="checkbox"/>
            </div>
            <div className="tabs">
                {
                    arrTypes.map((el ,i) => (
                        <button
                            key={i}
                            className={`tab ${type === el? "active"  : ""}`}
                            onClick={() => setList(el)}
                            type="button">{arrTabs[i]}
                        </button>
                    ))
                }
            </div>
            <div className="row">
                <ul className="list">
                    {
                        error ?
                            <div>{dataLang.error}</div>
                        :
                            loading ?
                                <BarLoader/>
                            :
                                listStarWars?.map( item => (
                                  <div onClick={() =>setCurrent(item)}
                                       key={item.name}>{item.name}
                                  </div>
                                ))
                    }
                </ul>
                {loading?
                    <div>{dataLang.skeleton}</div>
                    :
                    <Card/>
                }
            </div>

        </div>
    );
};

export default App;
