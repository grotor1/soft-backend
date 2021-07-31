import React from 'react'
import './SignUpPage.css'
import Header from '../Header'
import {Link} from 'react-router-dom'

const SignUpPage = () => {
    return (
        <div className="signup-page">
            <Header />
            <div className="container">
                <div className="apply-flex">
                    <form className="signup">
                        <h1 className="sign__heading">Регистрация</h1>
                        <div className="sign__desc">Добро пожаловать в мир новых тренировок</div>
                        <input type="text" placeholder="Имя" className="sign-up__input-2 name__input" />
                        <input type="text" placeholder="Фамилия" className="sign-up__input-2 phone__input" />
                        <input type="e-mail" placeholder="Электронная почта" className="sign-up__input-2 mail__input" />
                        <input type="date" placeholder="Дата рождения" className="sign-up__input-2 mail__input" />
                        <input type="phone" placeholder="Телефон" className="sign-up__input-2 phone__input" />
                        <div className="sign-flex choice">
                            <div>муж</div>
                            <div>жен</div>
                        </div>
                        <div>
                            <ul className="sign-list">
                                <li className="sign-list__item">
                                    <p>
                                        <input type="radio" id="test1" name="radio-group" checked />
                                        <label for="test1">Apple</label>
                                    </p>
                                </li>
                                <li className="sign-list__item">
                                    <p>
                                        <input type="radio" id="test2" name="radio-group" checked />
                                        <label for="test2">Осанка</label>
                                    </p>
                                </li>
                                <li className="sign-list__item">
                                    <p>
                                        <input type="radio" id="test3" name="radio-group" checked />
                                        <label for="test3">Поддерживать форму</label>
                                    </p>
                                </li>
                                <li className="sign-list__item">
                                    <p>
                                        <input type="radio" id="test4" name="radio-group" checked />
                                        <label for="test4">Набрать массу</label>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <input type="password" placeholder="Пароль" className="sign-up__input-2" />
                        <input type="password" placeholder="Подтвердите пароль" className="sign-up__input-2" />
                        <div className="sign-flex">
                            <button className="signup-btn-2" type="submit" >Завершить</button>
                            <Link to="/enter" className="enter-btn">
                                    <button className="enter-btn">Знакомы? Войдите</button>
                            </Link>
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