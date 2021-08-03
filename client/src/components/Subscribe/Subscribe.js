import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
    return (
        <div className="subscribe">
            <h3 className="subscribe-title">Подпишись и получай интересные упражнения</h3>
            <form className="subscribe-form">
                <input placeholder="e-mail" type="e-mail" />
                <button className="subscribe-btn" type="submit">Подписаться</button>
            </form>
        </div>
    )
}

export default Subscribe