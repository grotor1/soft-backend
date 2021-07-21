import React, { Component } from 'react'
import Header from '../Header/Header'
import './TrainersPage.css'
import Trainer from './Trainer'
import Footer from '../Footer'
import Apply from './ApplyPopup'
import { useState } from 'react'


const TrainersPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false)
        return (
            <div>
                <Header />
                <div className="trainers">
                    <div className="container">
                        <h1 className="trainers__title">Тренеры</h1>
                        <div className="trainers__description">
                            <p className="trainers__text">Выберите тренера из предложеных или оставьте заявку</p>
                            <button className="btn__apply" onClick={() => setButtonPopup(true)}>Подать заявку</button>
                        </div>
                        <ul className="trainers__list">
                            <li>
                                <Trainer class="kraynov" 
                                name="Сергей Крайнов"
                                info="Фитнеc, кардио, детский фитнес, ЛФК."/>
                            </li>
                            <li>
                                <Trainer class="isaeva" 
                                name="Екатерина Исаева"
                                info="фитнес, хореография, Стретчинг, ОФП"/>
                            </li>
                            <li>
                                <Trainer class="krasnova" 
                                name="Наталья Краснова"
                                info="Фитнеc, кардио, ЛФК, ОФП, для всей семьи"/>
                            </li>
                            <li>
                                <Trainer class="timofeev" 
                                name="Кирилл Тимофеев"
                                info="Фитнеc, кардио, ОФП, ЛФК, для всей семьи, Групповые, Детский фитнес"/>
                            </li>
                            <li>
                                <Trainer class="bortnik" 
                                name="Роман Бортник"
                                info="фитнес, Стретчинг, ОФП, кроссфит, воркаут"/>
                            </li>
                            <li>
                                <Trainer class="samoylova" 
                                name="Самойлова Марина"
                                info="Фитнес, ОФП"/>
                            </li>
                            <li>
                                <Trainer class="tsikhorsky" 
                                name="Юрий Цихорский"
                                info="Фитнеc"/>
                            </li>
                            <li>
                                <Trainer class="pavlov" 
                                name="Александр Павлов"
                                info="Фитнес, пилатес, ОФП."/>
                            </li>
                            <li>
                                <Trainer class="govrova" 
                                name="Алиса Говорова"
                                info="Йога, групповые."/>
                            </li>
                        </ul>
                    </div>
                </div>
                <Footer />
                <Apply trigger={buttonPopup} setTrigger = {setButtonPopup} />
            </div>
        )
}

export default TrainersPage