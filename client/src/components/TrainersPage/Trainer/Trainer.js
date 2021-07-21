import React from 'react'
import TrainerPage from '../TrainersPage'
import './Trainer.css'


const Trainer = (props) => {
    return (
        <div className={`trainers-list__item ${props.class} bg-image`}>
            <div className="trainer__content">
                <h3 className="trainer-heading">{props.name}</h3>
                <p className="trainer-desc">{props.info}</p>
                <a class="more" href={TrainerPage} >Подробнее</a>
            </div>
        </div>
    )
}

export default Trainer