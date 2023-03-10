import {createContext, useContext, useEffect, useState} from "react";
import eng from "../lang/eng";
import ukr from "../lang/ukr";
const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [lang, setLang] = useState("ukr");
    const [theme, setTheme] = useState('white');
    const [dataLang, setDataLang] = useState(choseLang());


    function choseLang(lang = 'ukr') {
        switch (lang) {
            case 'ukr':
                return ukr
            case 'eng':
                return eng
        }
    }

    useEffect(() => {
        setDataLang(choseLang(lang))
    },[lang])

    const changeTheme = () => {
        if (theme === 'white') {
            setTheme('dark')
        } else {
            setTheme('white')
        }
    }

    return (
        <UserContext.Provider value={{ lang, setLang, theme, changeTheme, dataLang}}>
            {children}
        </UserContext.Provider>
    );
};