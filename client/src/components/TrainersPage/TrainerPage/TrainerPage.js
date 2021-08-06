import React, {useContext, useEffect} from 'react'
import './TrainerPage.css'
import {Link, useHistory, useParams, useRouteMatch} from "react-router-dom";
import {AuthContext} from "../../../context/AuthContext";
import {useHttp} from "../../../hooks/http.hook";
import {useMessage} from "../../../hooks/message.hook";


const TrainerPage = ({url, trainers, trainingTypes}) => {
    const {_id_trainer} = useParams()
    const trainer = trainers.find(trainer => trainer._id = _id_trainer)
    const trainerTrainingTypes = trainer.trainingTypes.map(trainerTrainingType => {
        return trainingTypes.find(trainingType => trainingType._id === trainerTrainingType._id_training)
    })
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const {_id_user} = useContext(AuthContext)
    const history = useHistory()

    const clickHandler = async () => {
        try {
            const {success} = await request("/api/fetch/createConversation", 'POST', {
                _id_trainer: trainer._id_user,
                _id_user
            })
            if (success) history.push("/chat")
        } catch (e) {
        }
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <div className="trainer-page__flex">
            <div className="trainer-page__information-left">
                <div className="left-flex">
                    <div className="align-left">
                        <Link to={url}>
                            <button className="close">
                                <img src="/arrow.svg"/>
                            </button>
                        </Link>
                    </div>
                    <div className="trainer__person">
                        <img className="trainer__image" src={`data:image/png;base64,${trainer.avatar}`}/>
                        <div className="status">
                            <div className="status__circle-green"/>
                            <span className="status__description">{trainer.isVacant ? "Свободен" : "Занят"}</span>
                        </div>
                        <p className="trainer__name">{trainer.name + " " + trainer.surname}</p>
                        <p className="trainer__description">Тренер</p>
                    </div>
                </div>
                <div>
                    <p className="trainer-desc__bold">Опыт работы</p>
                    <p className="trainer-desc__normal">{trainer.workExp}</p>
                </div>
                <div className="trainer-price__info">
                    <p className="trainer-desc__bold">Цена</p>
                    <p className="trainer-desc__normal">{trainer.price}</p>
                    <p className="trainer-desc__bold">При покупке:</p>
                    <p className="trainer-desc__normal">{trainer.specialOffers}</p>
                </div>
                <div className="trainer__contacts">
                    <p className="trainer-desc__bold">Контакты:</p>
                    {trainer.contacts.map(contact => {
                        return (
                            <a className={`social-site ${contact.name}`} href={contact.link}>{contact.link}</a>
                        )
                    })}
                </div>
                <button onClick={clickHandler}>
                    Написать
                </button>
            </div>
            <div className="trainer-page__information-right">
                <div className="trainer__kredo">Для того, чтобы начать заниматься с тренером, необходимо написать ему
                    напрямую через указанные контакты на странице.
                </div>
                <div className="trainer__about">
                    <p className="trainer-desc__bold">О себе</p>
                    <p className="trainer-desc__text">{trainer.aboutMyself}</p>
                </div>
                <div className="training-types-page">
                    <p className="trainer-desc__bold">Виды тренировок</p>
                    <ul className="train-list">
                        {trainerTrainingTypes.map(trainerTrainingType => {
                            return (
                                <li className="train-list__item-page">
                                    <img className="train__img-page"
                                         src={`data:image/png;base64,${trainerTrainingType.img}`}/>
                                    <h3 className="train__heading-page">{trainerTrainingType.name}</h3>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="sertificates">
                    <p className="trainer-desc__bold">Сертификаты</p>
                    <ul className="sertificates__list">
                        {trainer.certificates.map(certificate => {
                            return (
                                <li className="serteficates__list-item">
                                    <img src={`data:image/png;base64,${certificate}`}/>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="education">
                    <p className="trainer-desc__bold">Образовавние</p>
                    <ul className="education__list">
                        <li className="education__list-item">
                            {trainer.educations}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default TrainerPage