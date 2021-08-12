import React, {useContext, useEffect, useState} from "react"
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/http.hook";
import {Link} from "react-router-dom";

export const AdminLoginPage = () => {
    const [password, setPassword] = useState()
    const auth = useContext(AuthContext)
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const changeHandler = event => {
        setPassword(event.target.value)
    }
    const clickHandle = async () => {
        try {
            const data = await request("/api/auth/loginAdmin", "POST", {password})
            if (!data.message) auth.loginAdmin(data.token)
        } catch (e) {
        }
    }
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h1 className="login-container__header">
                    Введите пароль админа
                </h1>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Пароль"
                    onChange={changeHandler}
                />
                <button className="login-container__button" onClick={clickHandle}>
                    Войти
                </button>
            </div>
        </div>
    )
}