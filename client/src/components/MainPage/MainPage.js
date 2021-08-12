import React, {useEffect, useState} from 'react'
import Header from '../Header'
import './MainPage.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import Footer from '../Footer'
import Accordion from './Accordion'
import Carousel from 'react-elastic-carousel'
import Subscribe from '../Subscribe'
import Slider from "react-slick";
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";


const MainPage = () => {
    const style = {
        display: 'none'
    }

    return (
        <div>
            <div className="header-fixed">
                <Header/>
            </div>
            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero__content">
                            <div className="hero-texts">
                                <h1 className="hero-title">Онлайн спорт с персональным тренером.</h1>
                                <span className="hero-description">Занимайтесь спортом, <span className="green-text">не выходя из дома,</span> по любой удобной программе</span>
                                <Link to="/enter" className="nav__list-item">
                                    <button className="enter-btn-hero">Попробовать бесплатно</button>
                                </Link>
                            </div>
                            <div className="hero-images">
                                <img src="/hero-image.png" alt="" className="hero-image"/>
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
                            {/* <ul className="about-us__list"> */}
                                <Carousel itemsToShow={1} showArrows={false} enableAutoPlay={true} >
                                        <div className="about-us__item">
                                            <div className="about-us__texts">
                                                <span className="about-us__head">Удобная платформа для спорта все-в-одном</span>
                                                <p className="about-us__desc">Всё проводится на нашей платформе. Вам не придётся заходить на сторонние сервисы</p>
                                            </div>
                                            {/* <img src="/about-image.png" alt="" className="about-img" />     */}
                                        </div>
                                        <div className="about-us__item">
                                            <div className="about-us__texts">
                                                <span className="about-us__head">1:1 Онлайн тренировки</span>
                                                <p className="about-us__desc">Личные тренер подберёт все процессы индивидуально под вас</p>
                                            </div>
                                            {/* <img src="/about-image.png" alt="" className="about-img"/>     */}
                                        </div>
                                        <div className="about-us__item">
                                            <div className="about-us__texts">
                                                <span className="about-us__head">Сертифицированные специалисты</span>
                                                <p className="about-us__desc">На платформе специалисты с опытом работы более 2 лет</p>
                                            </div>
                                            {/* <img src="/about-image.png" alt="" className="about-img"/>     */}
                                        </div>
                                        <div className="about-us__item">
                                            <div className="about-us__texts">
                                                <span className="about-us__head">Доступные цены</span>
                                                <p className="about-us__desc">Онлайн-тренировки не только легче, но и дешевле. При этом вы не теряете эффективности тренировок.</p>
                                                <b className="about-us__desc">Тренировки от 600 руб!</b>
                                                <b className="about-us__desc">Попробовать бесплатно</b>
                                            </div>
                                            {/* <img src="/about-image.png" alt="" className="about-img"/>     */}
                                        </div>
                                </Carousel>
                                
                                
                            {/* </ul> */}
                        </div>
                    </div>
                </section>
                <section className="mission">
                    <div className="container">
                        <div className="mission-flex">
                            <div>
                                <h2 className="section__title-black">Наша миссия: </h2>
                                <span className="mission-text">Дать людям возможность тренироваться 
                                    <span className="green-2"> легче:</span>
                                </span>
                                <p className="mission-text">где угодно и когда угодно</p>
                            </div>
                            <div>
                                <img src="/mission-img.png" className="mission-img"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="comfort">
                    <div className="container">
                        <h2 className="section__title-black comfort-title">Почему с нами удобно?</h2>
                        <div className="leaf-1"></div>
                        <ul className="comfort-list">
                            <li className="comfort-list__item">
                                <img src="/c-1.jpg"/>
                                <p className="comfort-item__heading">Обзор тренировок с нескольких ракурсов.</p>
                                <span className="comfort-item__desc">Вы сможете подключить дополнительные устройства (телефон или ноутбук) во время занятия и использовать их в качестве дополнительных камер для нескольких ракурсов перед тренеров</span>
                            </li>

                            <li className="comfort-list__item">
                                <img src="/c-2.jpg"/>
                                <p className="comfort-item__heading">Синхронизация с фитнес-устройствами</p>
                                <span className="comfort-item__desc">Тренировки не заканчиваются только на звонках. Если у вас есть фитнес-устройство, то мы предлагаем подключить его к нашей платформе для лучшего отслеживания вашего прогресса.</span>
                            </li>
                            <li className="comfort-list__item">
                                <img src="/c-3.jpg"/>
                                <p className="comfort-item__heading">История и рост развития</p>
                                <span className="comfort-item__desc">Вы можете вести личный профиль, который открыт только вам, и добавлять все результаты, после чего отслеживать свои прогресс. Исходя из этих данных, тренеры смогут подстраивать более эффективные стратегии тренировок.</span>
                            </li>
                            <li className="comfort-list__item">
                                <img src="/c-4.jpg"/>
                                <p className="comfort-item__heading">Музыка для тренировок</p>
                                <span className="comfort-item__desc">Для каждого вида тренировок вас ждет отдельный плейлист. С музыкой легче приступать к новым подходам!</span>
                            </li>
                        </ul>

                    </div>

                </section>
                <section className="steps ">
                    <div className="container">
                        <h2 className="section__title-black comfort-title">Четыре шага</h2>
                        <ul className="steps__list">
                            <li className="steps__item">
                                <p className="steps__text one">Зарегистрироваться на платформе</p>
                            </li>
                            <li className="steps__item">
                                <p className="steps__text two">Выбрать тренера на нашей платформе или оставить заявку</p>
                            </li>
                            <li className="steps__item">
                                <p className="steps__text three">Обсудить программу тренировок.</p>
                            </li>
                            <li className="steps__item">
                                <p className="steps__text four">Начать тренировки</p>
                            </li>
                            
                        </ul>
                    </div>
                </section>
                <section className="training-types" id="trainings">
                    <div className="container">
                        <h2 className="section__title">Виды тренировок</h2>
                        
                        <Carousel className="train-list-l" pagination={false} breakPoints={[
                            {width: 600, itemsToShow:1},
                            {width: 900, itemsToShow:4},
                        ]} enableAutoPlay={true}>
                            <div className="train-list__item ">
                                        <img className="train__img" src="/barbell.svg"></img>
                                        <h3 className="train__heading">Фитнес</h3>
                                </div>
                                <div className="train-list__item ">
                                
                                        <img className="train__img" src="/heart.png"></img>
                                        <h3 className="train__heading">Кардио</h3>
                                    
                                </div>
                                <div className="train-list__item ">
                                
                                        <img className="train__img" src="/yoga-mat.png"></img>
                                        <h3 className="train__heading">Йога</h3>
                                    
                                </div>
                                <div className="train-list__item ">
                                
                                        <img className="train__img" src="/pilates.png"></img>
                                        <h3 className="train__heading">Пилатес</h3>
                                    
                                </div>
                                <div className="train-list__item">
                                
                                        <img className="train__img" src="/family.png"></img>
                                        <h3 className="train__heading">Для всей семьи</h3>
                                    
                                </div>
                                <div className="train-list__item">
                                
                                        <img className="train__img" src="/ballet.svg"></img>
                                        <h3 className="train__heading">Хореография</h3>
                                    
                                </div>
                                <div className="train-list__item">
                                
                                        <img className="train__img" src="/group2.png"></img>
                                        <h3 className="train__heading">Групповые</h3>
                                    
                                </div>
                                <div className="train-list__item">
                                
                                        <img className="train__img" src="/baby.png"></img>
                                        <h3 className="train__heading">Детский фитнес</h3>
                                    
                                </div>
                                <div className="train-list__item">
                                
                                        <img className="train__img" src="/climb.png"></img>
                                        <h3 className="train__heading">ОФП</h3>
                                    
                                </div>
                                <div className="train-list__item">
                                
                                        <img className="train__img" src="/sport.png"></img>
                                        <h3 className="train__heading">ЛФК</h3>
                                    
                                </div>
                        </Carousel>
                    </div>
                </section>
                <section className="trainers-l">
                    <div className="container">
                        <div className="trainers-content">
                            <h2 className="section__title">Тренеры недели</h2>
                            <ul className="trainers-list">
                                <li className="trainers-list__item-l kraynov">
                                    <div className="trainer__content">
                                        <h3 className="trainer-heading">Сергей Крайнов</h3>
                                        <p className="trainer-desc">Фитнеc, кардио, детский фитнес, ЛФК.</p>
                                        <a className="more">Подробнее</a>
                                    </div>
                                </li>
                                <li className="trainers-list__item-l isaeva">
                                    <div className="trainer__content">
                                        <h3 className="trainer-heading">Екатерина Исаева</h3>
                                        <p className="trainer-desc">фитнес, хореография, Стретчинг, ОФП</p>
                                        <a className="more">Подробнее</a>
                                    </div>
                                </li>
                                <li className="trainers-list__item-l krasnova">
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
                                    <img src="/fire.png" alt="" className="result__image" />
                                    <span className="results__desc">Продуктивные тренировки</span>
                                </li>
                                <li className="result__item">
                                    <img src="/wrist.png" alt="" className="result__image" />
                                    <span className="results__desc">Бесконечную мотивацию</span>
                                </li>
                                <li className="result__item">
                                    <img src="/cloud.png" alt="" className="result__image" />
                                    <span className="results__desc">Легкость использования</span>
                                </li>
                                <li className="result__item">
                                    <img src="/trophy.png" alt="" className="result__image" />
                                    <span className="results__desc">Профессиональных тренеров</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <Accordion />
                <Subscribe />
            </main>
            <Footer />
        </div>
    )
}

export default MainPage