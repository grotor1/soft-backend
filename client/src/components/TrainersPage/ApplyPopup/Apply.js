import React from 'react'
import './Apply.css'
import { useState } from 'react'


const Apply = (props) => {
    
    return (props.trigger) ?
        (<div className="apply-bg">
            <div className="container">
                <div className="apply-flex">
                    <form className="signup">
                        <input type="text" placeholder="Имя" className="sign-up__input name__input" />
                        <input type="e-mail" placeholder="Электронная почта" className="sign-up__input mail__input" />
                        <input type="phone" placeholder="Телефон" className="sign-up__input phone__input" />
                        <button className="signup-btn" type="submit" >Регистрация</button>
                    </form>
                    <div className="popup-image">
                        <button className="close-popup" >
                            <img src="/close.png" onClick={() => props.setTrigger(false)} />
                        </button>
                        <img src="/signup.png" className="signup__img"/>
                    </div>
                </div>
            </div>
        </div>) : ""
    
}

export default Apply