export const SET_LIST = 'SET_LIST';
export const ASYNC_START_DATA = 'ASYNC_START_DATA';
export const SET_TYPE = 'SET_TYPE';
export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const SET_ERROR = 'SET_ERROR';
export const SET_CURRENT_DATA = 'SET_CURRENT_DATA';

const defaultValue = {
    listStarWars: [],
    type: 'people',
    loading: true,
    error: false,
    current: {},
}

export const starWarReducers = (store = defaultValue, action) => {
    switch (action.type) {
        case SET_LIST:
            return {...store, listStarWars: action.payload, loading: false};

        case TOGGLE_LOADER:
            return {...store, loading: !store.loading};

        case SET_ERROR:
            return {...store, error: !store.error};

        case SET_TYPE:
            return {...store, type: action.payload};

        case SET_CURRENT_DATA:
            return {...store, current: action.payload};

        default:
            return {...store};
    }

}


export const setListActionCreator = (payload) => {return  {type: SET_LIST , payload}}
export const asyncListActionCreator = () => { return  {type: ASYNC_START_DATA}}
export const setTypeActionCreator = (payload) => { return  {type: SET_TYPE , payload}}
export const setErrorActionCreator = () => { return  {type: SET_ERROR}}
export const toggleLoaderActionCreator = () => { return  {type: TOGGLE_LOADER}}
export const setCurrentActionCreator = (payload) => { return  {type: SET_CURRENT_DATA, payload}}