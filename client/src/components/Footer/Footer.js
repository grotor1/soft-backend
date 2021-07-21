import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h2 className="footer__title">Связаться с нами</h2>
                <ul className="social-sites__list">
                    <li className="social-list__item">
                        <img src="/inst (2).png" />
                        <a className="social__link">
                            https://www.instagram.com/soft_platform/
                        </a>
                    </li>
                    <li className="social-list__item">
                        <img src="/tiktok.png" />
                        <a className="social__link">
                            
                        </a>
                    </li>
                    <li className="social-list__item">
                        <img src="/mail.png" />
                        <a className="social__link"> 
                            soft.platform2020@gmail.com
                        </a>
                    </li>
                    <li className="social-list__item">
                        <img src="/phone.png" />
                        <a className="social__link">
                            +79774821093
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer