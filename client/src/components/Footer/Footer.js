import React from 'react'
import { Link } from 'react-router-dom'
import LegacyPage from '../LegacyPage'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h2 className="footer__title">Связаться с нами</h2>
                <ul className="social-sites__list">
                    <li className="social-list__item">
                        
                        <a className="social__link" href="https://www.instagram.com/soft_platform/" target="_blank">
                            <img src="/inst.svg" />
                        </a>
                    </li>
                    <li className="social-list__item">
                        
                        <a className="social__link" href="https://vm.tiktok.com/ZSJpP8Tew/" target="_blank">
                            <img src="/tiktok.svg"></img>
                        </a>
                    </li>
                    <li className="social-list__item">
                        
                        <a className="social__link" href="mailto:soft.platform2020@gmail.com" target="_blank"> 
                             <img src="/mail.svg" />
                        </a>
                    </li>
                </ul>
                <Link to="/pk" className="policy">
                    Политика конфиденциальности
                </Link>
                <div className="policy">
                    <Link to="/about">О нас</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer