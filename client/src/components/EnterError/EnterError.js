import React from 'react'
import './EnterError.css'
import Header from '../Header'


const EnterError = () => {
    return (
        <div className="enter-error">
            <Header />
            <div className="container">
                <div className="center-err">
                    <p className="error-heading">Для продолжения необходимо зарегистрироваться</p>
                    {/* <div className="err-flex">
                        <button className="signup-err-btn">Зарегистрироваться</button>
                        <button className="enter-err-btn">Войти</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default EnterError