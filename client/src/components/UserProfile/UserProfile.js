import React, {useContext, useEffect, useState} from 'react'
import Header from '../Header'
import './UserProfile.css'
import {AuthContext} from "../../context/AuthContext";
import {useMessage} from "../../hooks/message.hook";
import {useHttp} from "../../hooks/http.hook";
import {Link} from "react-router-dom";

const UserProfile = () => {
    const [profileData, setProfileData] = useState({})
    const [initials, setInitials] = useState({})
    const {_id_user, logout} = useContext(AuthContext)
    const message = useMessage()
    const {request, error, clearError} = useHttp()

    useEffect(() => {
        const dataFromServer = async () => {
            try {
                const {data} = await request(`/api/fetch/getUser/${_id_user}`, 'GET')
                setProfileData(data)
                setInitials({name: data.name, surname: data.surname})
            } catch (e) {
            }
        }
        dataFromServer()
    }, [request])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setProfileData({...profileData, [event.target.name]: event.target.value})
    }

    const submitHandler = async () => {
        try {
            const {success} = await request(`/api/fetch/updateUser/${_id_user}`, 'PATCH', {...profileData})
            if (success) message('Изменения успешно сохранены')
        } catch (e) {
        }
    }

    return (
        <div className="user-profile">
            <Header/>
            <div className="container">
                <div className="useritem">
                    <div className="user-item__first">
                        <div className="user-item-flex">
                            <img className="user-item-image" src="/profile.png"/>
                            <div>
                                <p className="user-item-name">{initials.name + " " + initials.surname}</p>
                                <p className="status-online">Сейчас в сети</p>
                            </div>
                            <Link to={"/chat"}>
                                <button className="chat-btn chat-btn-1">Чат</button>
                            </Link>
                        </div>
                        <span className="phone-done">Номер телефона подтвержден</span>
                    </div>
                    <div className="user-item__second">
                        <h3 className="bold">Личные данные</h3>
                        <ul>
                            <li className="input-list__item">
                                <input placeholder="Имя" value={profileData.name} onChange={changeHandler} name="name"
                                       type="text"/>
                            </li>
                            <li className="input-list__item">
                                <input placeholder="Фамилия" value={profileData.surname} onChange={changeHandler}
                                       name="surname" type="text"/>
                            </li>
                            <li className="input-list__item">
                                <input placeholder="Телефон" value={profileData.phone} onChange={changeHandler}
                                       name="phone" type="phone"/>
                                <span>Специалисты не видят ваш номер. Вы сами выбираете, кому он будет доступен</span>
                            </li>
                            <li className="input-list__item">
                                <input placeholder="Электронная почта" value={profileData.email}
                                       onChange={changeHandler} name="email"
                                       type="email"/>
                            </li>
                        </ul>
                        <div className={"btn-flex"}>
                            <button className="save-btn" onClick={submitHandler}>Сохранить</button>
                            
                            <button className="save-btn" onClick={logout}>Выход</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile