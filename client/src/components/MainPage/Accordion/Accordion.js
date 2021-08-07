import React from 'react'
import './Accordion.css'
import { useState } from 'react'

const Accordion = () => {
    const [itemSelected, setSelected] = useState(null)
    const data = [
        {
            question: 'Что специального нужно покупать к тренировкам?',
            answer: 'Нужна только спортивная одежда и метр свободного пространства вокруг себя. Ну и пол под ногами, желательно.)',
        },
        {
            question: 'У меня много физических особенностей, требующих индивидуального внимания, могу ли я тренироваться у вас?',
            answer: 'Конечно. Тренировки проходят с тренером. Он подстроит весь тренировочный процесс под вас. Будут учитываться все аспекты и пожелания.',
        },
        {
            question: 'Что делать, если мне не понравился тренер?',
            answer: 'Просто напишите об этом нам и вы в тот же день сможете выбрать другого тренера. Это делается быстро и легко.',
        },
        {
            question: 'Могу ли я заниматься одновременно с другом, который не рядом.',
            answer: 'Да! Многие тренеры на нашей платформе проводят групповые занятия. Чтобы узнать, кто именно, нажмите сюда. ',
        },
    ]
    const toggle = (i) => {
        if (itemSelected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return(
        <section className="faq">
            <div className="container">
                <div className="faq-content">
                    <ul className="faq-list" id="accordion">
                        {data.map((item, i) => {
                            return (
                                    <div >
                                        <h2 className="faq-list__item">
                                            <button className={itemSelected === i ? "faq-list__title arrow-down" : "faq-list__title"} onClick={() => {toggle(i)}}>{item.question}</button>
                                        </h2>
                                        <p className={itemSelected === i ? "faq-item__content show" : "faq-item__content"}>{item.answer}</p>
                                    </div>
                                )
                        }) }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Accordion