import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <h2 className="footer__title">Связаться с нами</h2>
                <ul className="social-sites__list">
                    <li className="social-list__item">
                        
                        <a className="social__link" href="https://www.instagram.com/soft_platform/">
                            <img src="/inst.svg" />
                        </a>
                    </li>
                    <li className="social-list__item">
                        
                        <a className="social__link" href="https://vm.tiktok.com/ZSJpP8Tew/">
                            <img src="/tiktok.png"></img>
                        </a>
                    </li>
                    <li className="social-list__item">
                        
                        <a className="social__link" href="soft.platform2020@gmail.com"> 
                             <img src="/mail.png" />
                        </a>
                    </li>
                    <li className="social-list__item">
                        
                        <a className="social__link" href="+79774821093">
                            <img src="/phone.png" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer