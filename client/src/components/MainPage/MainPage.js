import React from 'react'
import Header from '../Header'
import './MainPage.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Footer from '../Footer'
import Accordion from './Accordion'

const MainPage = () => {
    return (
        <div>
            <Header/>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero__content">
                            <div className="hero-texts">
                                <h1 className="hero-title">Онлайн спорт с персональным тренером.</h1>
                                <span
                                    className="hero-description">Занимайтесь спортом, не выходя из дома, по любой <span
                                    className="green-text">удобной</span> программе</span>
                            </div>
                            <div className="hero-images">
                                <img src="/hero-image.png" alt=""/>
                                <img src="/Ellipse 22.svg" alt="" className="ell-1"/>
                                <img src="/Ellipse 28.svg" alt="" className="ell-2"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-soft">
                    <div className="container">
                        <div className="about-soft__content">
                            <h2 className="section__title">Soft - это</h2>
                            <ul className="about-us__list">
                                <li className="about-us__item">
                                    <img src="/house.png" alt="" className="about-us__image"/>
                                    <span className="about-us__desc">Занятия дома</span>
                                </li>
                                <li className="about-us__item">
                                    <img src="/clock.png" alt="" className="about-us__image"/>
                                    <span className="about-us__desc">Сэкономленное время</span>
                                </li>
                                <li className="about-us__item">
                                    <img src="/karate.png" alt="" className="about-us__image"/>
                                    <span className="about-us__desc">Профессиональная помощь</span>
                                </li>
                                <li className="about-us__item">
                                    <img src="/shy1.png" alt="" className="about-us__image"/>
                                    <span className="about-us__desc">Комфорт</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="mission">
                    <div class="mission-black-rectangle">
                    </div>
                    <div className="container mission-flex">
                        <div>
                            <h2 className="section__title-white">Наша миссия: </h2>
                            <span className="mission-text">Дать людям возможность тренироваться <span
                                className="green-2">легче:</span></span>
                            <p className="mission-text">где угодно и когда угодно</p>
                        </div>
                        <div>
                            <img src="/mission__image.png"></img>
                        </div>
                        <img src="/Rectangle 181.png" class="mission-background-image"/>
                    </div>
                    <img src="/Vector 8.png" className="line"/>
                </section>
                <section className="steps container">
                    <ul className="steps__list">
                        <li className="steps__item">
                            <h3 className="steps__title">Шаг 1</h3>
                            <p className="steps__text">выбрать тренера на нашей платформе, либо оставить заявку.</p>
                        </li>
                        <li className="steps__item">
                            <h3 className="steps__title">Шаг 2</h3>
                            <p className="steps__text">связаться с тренером, либо ожидать, когда с вами свяжутся. </p>
                        </li>
                        <li className="steps__item">
                            <h3 className="steps__title">Шаг 3</h3>
                            <p className="steps__text">Обсудить программу тренировок.</p>
                        </li>
                        <li className="steps__item">
                            <h3 className="steps__title">Шаг 4</h3>
                            <p className="steps__text">Приступить к тренировкам</p>
                        </li>
                    </ul>
                </section>
                <section className="training-types">
                    <h2 className="section__title">Виды тренировок</h2>
                    <ul className="train-list">
                        <li className="train-list__item">
                            <a>
                                <img className="train__img" src="/___ 4.png"></img>
                                <h3 className="train__heading">Фитнес</h3>
                            </a>
                        </li>
                        <li className="train-list__item">
                            <a>
                                <img className="train__img" src="/trenirovki_doma_dlya_muzhchin_56 2.png"></img>
                                <h3 className="train__heading">Кардио</h3>
                            </a>
                        </li>
                        <li className="train-list__item">
                            <a>
                                <img className="train__img"
                                     src="/110543504-happy-african-american-woman-showing-ok-sign-while-sitting-on-black-yoga-mat-over-white-wall-backgro 1.png"></img>
                                <h3 className="train__heading">Йога</h3>
                            </a>
                        </li>
                        <li className="train-list__item">
                            <a>
                                <img className="train__img" src="/pilates-man-w760h570 1.png"></img>
                                <h3 className="train__heading">Пилатес</h3>
                            </a>
                        </li>
                        <li className="train-list__item">
                            <a>
                                <img className="train__img" src="/family.png"></img>
                                <h3 className="train__heading">Для всей семьи</h3>
                            </a>
                        </li>
                    </ul>
                </section>
                <section className="trainers">
                    <div className="container">
                        <div className="trainers-content">
                            <h2 className="section__title">Тренеры недели</h2>
                            <ul className="trainers-list">
                                <li className="trainers-list__item kraynov">
                                    <div className="trainer__content">
                                        <h3 className="trainer-heading">Сергей Крайнов</h3>
                                        <p className="trainer-desc">Фитнеc, кардио, детский фитнес, ЛФК.</p>
                                        <a className="more">Подробнее</a>
                                    </div>
                                </li>
                                <li className="trainers-list__item isaeva">
                                    <div className="trainer__content">
                                        <h3 className="trainer-heading">Екатерина Исаева</h3>
                                        <p className="trainer-desc">фитнес, хореография, Стретчинг, ОФП</p>
                                        <a className="more">Подробнее</a>
                                    </div>
                                </li>
                                <li className="trainers-list__item krasnova">
                                    <div className="trainer__content">
                                        <h3 className="trainer-heading">Наталья Краснова</h3>
                                        <p className="trainer-desc">Фитнеc, кардио, ЛФК, ОФП, для всей семьи</p>
                                        <a className="more">Подробнее</a>
                                    </div>
                                </li>
                            </ul>
                            <div className="button-center">
                                <Link to="trainers">
                                    <button className="show-tr">Все тренеры</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="getters">
                    <div className="container">
                        <div className="gettes__content">
                            <h2 className="section__title">С нами ты приобретёшь</h2>
                            <ul className="results__list">
                                <li className="result__item">
                                    <img src="/fire.png" alt="" className="result__image"/>
                                    <span className="about-us__desc">Продуктивные тренировки</span>
                                </li>
                                <li className="result__item">
                                    <img src="/wrist.png" alt="" className="result__image"/>
                                    <span className="about-us__desc">Бесконечную мотивацию</span>
                                </li>
                                <li className="result__item">
                                    <img src="/cloud.png" alt="" className="result__image"/>
                                    <span className="about-us__desc">Легкость использования</span>
                                </li>
                                <li className="result__item">
                                    <img src="/trophy.png" alt="" className="result__image"/>
                                    <span className="about-us__desc">Профессиональных тренеров</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Accordion/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainPage