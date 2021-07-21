import React, {useContext} from "react";
import "./Sidebar.css"
import {AuthContext} from "../../../../context/AuthContext";
import {Link} from "react-router-dom";

export const Sidebar = ({match}) => {
    const auth = useContext(AuthContext)
    const {url} = match
    return (
        <div className="sidebar-wrapper">
            <h2 className="sidebar-header">
                <Link to={`${url}`}>
                    Меню
                </Link>
            </h2>
            <Link to={`${url}/trainerAdd`} className="sidebar-button">
                <h2>
                    Добавление тренеров
                </h2>
            </Link>
            <Link to={`${url}/trainingAdd`} className="sidebar-button">
                <h2>
                    Добавление тренировок
                </h2>
            </Link>
            <Link to={`${url}/trainerList`} className="sidebar-button">
                <h2>
                    Список тренеров
                </h2>
            </Link>
            <Link to={`${url}/trainingTypeList`} className="sidebar-button">
                <h2>
                    Список тренировок
                </h2>
            </Link>
            <Link to={`/adminLogin`} className="sidebar-button sidebar-button__exit">
                <div onClick={auth.logout}>
                    <h2>
                        Выйти
                    </h2>
                </div>
            </Link>
        </div>
    )
}