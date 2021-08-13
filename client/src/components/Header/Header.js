import React, {useContext, useState} from 'react'
import {Link, useRouteMatch} from 'react-router-dom'
import './Header.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthContext} from "../../context/AuthContext";


const Header = () => {
    const {path} = useRouteMatch()
    const [sidebar, setSidebar] = useState(false)
    const {isAuth} = useContext(AuthContext)
    const showSidebar = () => setSidebar
    (!sidebar)
    return (
        <header className="header">
            <div className="container">
                <div className={sidebar ? "menu-burger active" : "menu-burger"}>
                    <Link to={"/"}>
                        <img src="/SoftLogo.png" alt="" className="logo-1"/>
                    </Link>
                    <nav className="">
                        <ul className="nav__list-burger">
                            <li className="list-item-b">
                                <Link to="/" className="nav__list-item nav__list-item-menu">Главная</Link>
                            </li>
                            {path === "/" &&
                            <li className="list-item-b">
                                <a className="nav__list-item nav__list-item-menu" href="#trainings"> Тренировки</a>
                            </li>}
                            <li className="list-item-b">
                                <Link to={"/trainers"} className="nav__list-item nav__list-item-menu">Стоимость</Link>
                            </li>
                            {isAuth ? <li className="list-item-b">
                                <Link to={"/chat"} className="nav__list-item nav__list-item-menu">Мои чаты</Link>
                            </li> : ""}
                            <li className="list-item-b">
                                {
                                    isAuth ?
                                        <Link to="/profile" className="nav__list-item nav__list-item-menu">
                                            <button className="sign-head-btn">Профиль</button>
                                        </Link> :
                                        <Link to="/enter" className="nav__list-item nav__list-item-menu">
                                            <button className="sign-head-btn">Войти</button>
                                        </Link>
                                }
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__content">
                    <Link to={"/"}><img src="/SoftLogo.png" alt="" className="logo"/></Link>
                    <nav className="navbar">
                        <ul className="nav__list">
                            <li className="list-item">
                                <Link to="/" className="nav__list-item">Главная</Link>
                            </li>
                            {path === "/" &&
                            <li className="list-item">
                                <a className="nav__list-item" href="#trainings"> Тренировки</a>
                            </li>}
                            <li className="list-item">
                                <Link to={"/trainers"} className="nav__list-item">Стоимость</Link>
                            </li>
                            {isAuth ? <li className="list-item">
                                <Link to={"/chat"} className="nav__list-item">Мои чаты</Link>
                            </li> : ""}
                            <li className="list-item-b">
                                {
                                    isAuth ?
                                        <Link to="/profile" className="nav__list-item">
                                            <button className="sign-head-btn">Профиль</button>
                                        </Link> :
                                        <Link to="/enter" className="nav__list-item">
                                            <button className="sign-head-btn">Войти</button>
                                        </Link>
                                }
                            </li>
                        </ul>
                    </nav>
                    <div className="menu" onClick={showSidebar}></div>
                </div>
            </div>
        </header>
    )
}
export default Header