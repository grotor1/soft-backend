import React from 'react'
import './EnterPage.css'
import Header from '../Header'
import {Link} from 'react-router-dom'


const EnterPage = () => {
    return(
        <div className="signup-page">
            <Header />
            <div className="container">
                <div className="apply-flex">
                    <form className="signup">
                        <h1 className="sign__heading">Вход</h1>
                        <div className="sign__desc">Снова заходишь? Значит не бросил тренировки, молодец!</div>
                        <input type="e-mail" placeholder="Электронная почта" className="sign-up__input-2 mail__input" />
                        <input type="password" placeholder="Пароль" className="sign-up__input-2" />
                        <input type="password" placeholder="Подтвердите пароль" className="sign-up__input-2" />
                        <Link to="/profile" className="nav__list-item">
                            <button className="signup-btn-2" type="submit" >Войти</button>
                        </Link>
                        
                    </form>
                    <div className="popup-image">
                        <img src="/signimg.png" className="signup__img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterPage