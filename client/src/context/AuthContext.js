import {createContext} from "react";

function noop () {}

export const AuthContext = createContext({
    tokenAdmin: null,
    loginAdmin: noop,
    logoutAdmin: noop,
    isAuthAdmin: false,
    token: null,
    login: noop,
    logout: noop,
    isAuth: false,
    _id_user: null
})