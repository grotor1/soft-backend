import React from 'react'
import EnterError from '../EnterError'
import Header from '../Header'
import './UserProfile.css'

const UserProfile = () => {
    const state = {
        loggedIn: false
    }
    if (state.loggedIn) {
        return <EnterError />
    }
    return (
        <div className="user-profile">
            <Header />
            <div className="container">
                <div className="useritem">
                    <div className="user-item__first">
                        <div className="user-item-flex">
                            <img className="user-item-image" src="/profile.jpg" />
                            <div>
                                <p className="user-item-name">Даша Маркова</p>
                                <p className="status-online">Сейчас в сети</p>
                            </div>
                        </div>
                        <span className="phone-done">Номер телефона подтвержден</span>
                    </div>
                    <div className="user-item__second">
                        <h3 className="bold">Личные данные</h3>
                        <ul>
                            <li className="input-list__item">
                                <input placeholder="Имя" type="text" />
                            </li>
                            <li className="input-list__item">
                                <input placeholder="Пол" />
                            </li>
                            <li className="input-list__item">
                                <input placeholder="Телефон" type="phone" />
                                <span>Спецаилисты не видят ваш номер. Вы сами выбираете, кому он будет доступен</span>
                            </li>
                            <li className="input-list__item">
                                <input placeholder="Электронная почта" type="e-mail" />
                            </li>
                        </ul>
                        <input type="checkbox" className="check" />
                        <span>Получать рассылку</span>
                        <button className="save-btn">Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile