import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'normalize.css'
import {Provider} from "react-redux";
import {store} from "./store";
import './index.css';
import {UserProvider} from "./context/userContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </UserProvider>
);
