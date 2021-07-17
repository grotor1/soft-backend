import React, {useContext, useState} from "react"
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/http.hook";

export const AdminLoginPage = () => {
    const [password, setPassword] = useState()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const message = useMessage()
    const changeHandler = event => {
        setPassword(event.target.value)
    }
    const clickHandle = async () => {
        try {
            console.log(password)
            const data = await request("/api/auth/login", "POST", {password})
            auth.login(data.token)
        } catch (e) {
            message(e)
        }
    }
    return(
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