import React, {useContext, useEffect, useState} from 'react'
import './EnterPage.css'
import Header from '../Header'
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from "react-router-dom";

const EnterPage = () => {
    const auth = useContext(AuthContext)
    const [form, setForm] = useState()
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const history = useHistory()

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const submitHandler = async event => {
        try {
            const data = await request("/api/auth/loginUser", "POST", {...form})
            auth.login(data.token, data._id_user)
            if(data.success){
                message("Вы успешно вошли")
                history.push("/profile")
            }
        } catch (e) {
        }
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <div className="signup-page">
            <Header/>
            <div className="container">
                <div className="apply-flex">
                    <div className="signup">
                        <h1 className="sign__heading">Вход</h1>
                        <div className="sign__desc">Снова заходишь? Значит не бросил тренировки, молодец!</div>
                        <input type="email" placeholder="Электронная почта" name="email"
                               className="sign-up__input-2 mail__input" onChange={changeHandler}/>
                        <input type="password" placeholder="Пароль" name="password" className="sign-up__input-2"
                               onChange={changeHandler}/>
                        <button className="signup-btn-2" onClick={submitHandler}>Войти</button>
                    </div>
                    <div className="popup-image">
                        <img src="/signimg.png" className="signup__img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterPage