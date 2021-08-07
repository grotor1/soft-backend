import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {BrowserRouter as Router} from 'react-router-dom'


const Header = () => {
    const state = {
        isLoggedIn: false
    }
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar
    (!sidebar)
    return (
        <header className="header">
            <div className="container">
                <div className={sidebar ? "menu-burger active" : "menu-burger"}>
                    <div>
                        <Link to={"/"}>
                            <img src="/SoftLogo.png" alt="" className="logo-1"/>
                        </Link>
                    </div>
                    <nav className="">
                        <ul className="nav__list-burger">
                            <li className="list-item-b">
                                <Link to="/" className="nav__list-item nav__list-item-menu">Главная</Link>
                            </li>
                            <li className="list-item-b">
                                 <a className="nav__list-item nav__list-item-menu" href="#trainings"> Тренировки</a>
                            </li>
                            <li className="list-item-b">
                                <a href="" className="nav__list-item nav__list-item-menu">Стоимость</a>
                            </li>
                            <li className="list-item-b">
                                <Link to="/signup" className="nav__list-item nav__list-item-menu">
                                    <button className="sign-head-btn">Регистрация</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__content">
                    <a href=""><img src="/SoftLogo.png" alt="" className="logo"/></a>
                    <nav className="navbar">
                        <ul className="nav__list">
                            <li className="list-item">
                                <Link to="/" className="nav__list-item">Главная</Link>
                            </li>
                            <li className="list-item">
                                <a className="nav__list-item" href="#trainings"> Тренировки</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="nav__list-item">Стоимость</a>
                            </li>
                            <li className="list-item-b">
                                <Link to="/signup" className="nav__list-item">
                                    <button className="sign-head-btn">Регистрация</button>
                                </Link>
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