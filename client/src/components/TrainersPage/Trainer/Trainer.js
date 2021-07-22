import React from 'react'
import './Trainer.css'
import {Link} from "react-router-dom";


const Trainer = (props) => {
    console.log(props.info)
    return (
        <div className={`trainers-list__item bg-image`} style={{backgroundImage:`url(data:image/png;base64,${props.avatar})`}}>
            <div className="trainer__content">
                <h3 className="trainer-heading">{props.name}</h3>
                <p className="trainer-desc">{props.info}</p>
                <Link to={`${props.url}/${props._id}`}>
                    <span className="more">Подробнее</span>
                </Link>
            </div>
        </div>
    )
}

export default Trainer