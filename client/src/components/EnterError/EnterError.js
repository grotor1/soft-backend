import React from 'react'
import './EnterError.css'
import Header from '../Header'
import {Link} from "react-router-dom";


const EnterError = () => {
    return (
        <div className="enter-error">
            <Header />
            <div className="container">
                <div className="center-err">
                    <p className="error-heading">Для продолжения необходимо зарегистрироваться или войти</p>
                    <Link to={"/signup"}>
                        <button className="signup-err-btn">Зарегистрироваться</button>
                    </Link>
                    <Link to={"/enter"}>
                        <button className="enter-err-btn">Войти</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EnterError