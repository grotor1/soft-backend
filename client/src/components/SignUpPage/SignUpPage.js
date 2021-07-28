import React, {useEffect, useState} from 'react'
import './SignUpPage.css'
import Header from '../Header'
import {Link} from 'react-router-dom'
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";

const SignUpPage = () => {
    const message = useMessage()
    const {request, error, clearError} = useHttp()
    const [form, setForm] = useState()


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const submitHandler = () => {
        try {
            const {success} = request("/api/auth/regUser", "POST", {...form})
            console.log(success)
            if (success) message("Вы успешно зарегистрировались")
        } catch (e) {
        }
    }

    const sexClickHandler = (event) => {
        setForm({...form, sex: event.target.id})
        event.target.classList.add("sex-chosen")
        document.getElementById(event.target.id === "male" ? "female" : "male").classList.remove("sex-chosen")
    }

    return (
        <div className="signup-page">
            <Header/>
            <div className="container">
                <div className="apply-flex">
                    <div className="signup">
                        <h1 className="sign__heading">Регистрация</h1>
                        <div className="sign__desc">Добро пожаловать в мир новых тренировок</div>
                        <input type="text" name="name" placeholder="Имя" className="sign-up__input-2 name__input"
                               onChange={changeHandler}/>
                        <input type="text" name="surname" placeholder="Фамилия"
                               className="sign-up__input-2 phone__input" onChange={changeHandler}/>
                        <input type="email" name="email" placeholder="Электронная почта"
                               className="sign-up__input-2 mail__input" onChange={changeHandler}/>
                        <input type="date" name="birthDate" placeholder="Дата рождения"
                               className="sign-up__input-2 mail__input" onChange={changeHandler}/>
                        <input type="phone" name="phone" placeholder="Телефон" className="sign-up__input-2 phone__input"
                               onChange={changeHandler}/>
                        <div className="sign-flex choice">
                            <div className="sex-variant" id="male" onClick={sexClickHandler}>муж</div>
                            <div className="sex-variant" id="female" onClick={sexClickHandler}>жен</div>
                        </div>
                        <div>
                            <ul className="sign-list">
                                <li className="sign-list__item">
                                    <p>
                                        <input type="radio" id="test1" name="target" value="Apple"
                                               onClick={changeHandler}/>
                                        <label for="test1">Apple</label>
                                    </p>
                                </li>
                                <li className="sign-list__item">
                                    <p>
                                        <input type="radio" id="test2" name="target" value="Осанка"
                                               onClick={changeHandler}/>
                                        <label for="test2">Осанка</label>
                                    </p>
                                </li>
                                <li className="sign-list__item">
                                    <p>
                                        <input type="radio" id="test3" name="target" value="Поддерживать форму"
                                               onClick={changeHandler}/>
                                        <label for="test3">Поддерживать форму</label>
                                    </p>
                                </li>
                                <li className="sign-list__item">
                                    <p>
                                        <input type="radio" id="test4" name="target" value="Поддерживать форму"
                                               onClick={changeHandler}/>
                                        <label for="test4">Набрать массу</label>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <input type="password" placeholder="Пароль" name="password" className="sign-up__input-2"
                               onChange={changeHandler}/>
                        <input type="password" placeholder="Подтвердите пароль" name="passwordRep"
                               className="sign-up__input-2" onChange={changeHandler}/>
                        <div className="sign-flex">
                            <button className="signup-btn-2" onClick={submitHandler}>Завершить</button>
                            <Link to="/enter" className="enter-btn">
                                <button className="enter-btn">Знакомы? Войдите</button>
                            </Link>
                        </div>
                    </div>
                    <div className="popup-image">
                        <img src="/signimg.png" className="signup__img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUpPage