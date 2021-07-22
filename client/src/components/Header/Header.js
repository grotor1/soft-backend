import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {BrowserRouter as Router} from 'react-router-dom'


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <Link to={"/"}>
                        <img src="/SoftLogo.png" alt="" className="logo"/>
                    </Link>
                    <nav className="navbar">
                        <ul className="nav__list">
                            <li className="list-item">
                                <Link to="/" className="nav__list-item">Главная</Link>
                            </li>
                            <li className="list-item">
                                <Link to="/trainers" className="nav__list-item">Тренировки</Link>
                            </li>
                            <li className="list-item">
                                <a href="" className="nav__list-item">Отзывы</a>
                            </li>
                            <li className="list-item">
                                <a href="" className="nav__list-item">Стоимость</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header