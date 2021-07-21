import React from 'react'
import TrainersPage from '../TrainersPage'
import './TrainerPage.css'


const TrainerPage = ({data}) => { 
    return (
        <div className="trainer-page__flex">
            <div className="trainer-page__information-left">
                <div className="left-flex">
                    <div className="align-left">
                        <button className="close" >
                            <img src="/arrow.svg" />
                        </button>
                    </div>
                    <div className="trainer__person">
                        <img className="trainer__image" src={data.kraynov.trainerImage}/>
                        <div className="status">
                            <div className="status__circle-green">  </div>
                            <span className="status__description">{data.kraynov.trainerStatus}</span>
                        </div>
                        <p className="trainer__name">{data.kraynov.fullName}</p>
                        <p className="trainer__description">{data.kraynov.trainerPosition}</p>
                        
                    </div>
                </div>
                <div>
                    <p className="trainer-desc__bold">Опыт работы</p>
                    <p className="trainer-desc__normal">{data.kraynov.trainerExperience}</p>
                </div>
                <div className="trainer-price__info">
                    <p className="trainer-desc__bold">Цена</p>
                    <p className="trainer-desc__normal">{data.kraynov.trainingCost}</p>
                    <p className="trainer-desc__bold">При покупке:</p>
                    <p className="trainer-desc__normal">5 или более занятий скидка 5%</p>
                    <p className="trainer-desc__normal">10 или более занятий скидка 10%</p>
                </div>
                <div className="trainer__contacts">
                    <p className="trainer-desc__bold">Контакты:</p>
                    <a className="social-site inst">{data.kraynov.trainerContacts}</a>
                    <a className="social-site phone"></a>
                </div>
            </div>
            <div className="trainer-page__information-right">
                <div className="trainer__kredo">Для того, чтобы начать заниматься с тренером, необходимо написать ему напрямую через указанные контакты на странице.</div>
                <div className="trainer__about">
                    <p className="trainer-desc__bold">О себе</p>
                    <p className="trainer-desc__text">{data.kraynov.trainerAbout}</p>
                </div>
                <div className="training-types-page">
                    <p className="trainer-desc__bold">Виды тренировок</p>
                    <ul class="train-list">
                        {
                            data.kraynov.trainingTypes.map((item) => {
                                return (
                                    <li class="train-list__item-page">
                                        <img class="train__img-page" src={item.image}></img>
                                        <h3 class="train__heading-page">{item.name}</h3>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="sertificates">
                    <p className="trainer-desc__bold">Сертификаты</p>
                    <ul className="sertificates__list">
                        {
                            data.kraynov.trainerAwards.map((item) => {
                                return (
                                    <li className="serteficates__list-item">
                                        <img src={item} />
                                    </li>
                                )
                            })
                        }
                        
                    </ul>
                </div>
                <div className="education">
                    <p className="trainer-desc__bold">Образовавние</p>
                    <ul className="education__list">
                        {
                            data.kraynov.trainerEducation.map((item) => {
                                return (
                                    <li className="education__list-item">
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TrainerPage