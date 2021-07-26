import React from 'react'
import './SignUpPage.css'
import Header from '../Header'

const SignUpPage = () => {
    return (
        <div className="signup-page">
            <Header />
            <div className="container">
                <div className="apply-flex">
                    {/* <div>
                        <h1 className="sign__heading">Регистрация</h1>
                        <div className="sign__desc">Добро пожаловать в мир новых тренировок</div>
                    </div> */}
                    <form className="signup">
                        <h1 className="sign__heading">Регистрация</h1>
                        <div className="sign__desc">Добро пожаловать в мир новых тренировок</div>
                        <input type="text" placeholder="Имя" className="sign-up__input-2 name__input" />
                        <input type="text" placeholder="Фамилия" className="sign-up__input-2 phone__input" />
                        <input type="e-mail" placeholder="Электронная почта" className="sign-up__input-2 mail__input" />
                        <input type="date" placeholder="Дата рождения" className="sign-up__input-2 mail__input" />
                        <input type="phone" placeholder="Телефон" className="sign-up__input-2 phone__input" />
                        <div className="sign-flex">
                            <div>муж</div>
                            <div>жен</div>
                        </div>
                        <div>
                            <ul className="sign-list">
                                <li className="sign-list__item">
                                    <input type="radio" />Похудеть
                                </li>
                                <li className="sign-list__item">
                                    <input type="radio" />Осанка
                                </li>
                                <li className="sign-list__item">
                                    <input type="radio" />Поддерживать форму
                                </li>
                                <li className="sign-list__item">
                                    <input type="radio" />Набрать массу
                                </li>
                            </ul>
                        </div>
                        <input type="password" placeholder="Пароль" className="sign-up__input-2" />
                        <input type="password" placeholder="Пароль" className="sign-up__input-2" />
                        <div className="sign-flex">
                            <button className="signup-btn-2" type="submit" >Завершить</button>
                            <div>Знакомы? Войдите</div>
                        </div>
                    </form>
                    <div className="popup-image">
                        <img src="/signimg.png" className="signup__img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUpPage