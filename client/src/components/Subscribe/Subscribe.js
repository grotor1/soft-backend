import React, {useEffect, useState} from 'react'
import './Subscribe.css'
import {useHttp} from "../../hooks/http.hook";
import {useMessage} from "../../hooks/message.hook";

const Subscribe = () => {
    const [email, setEmail] = useState("")
    const {request, error, clearError} = useHttp()
    const message = useMessage()

    const changeHandler = (event) => {
        setEmail(event.target.value)
    }

    const clickHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await request("/api/fetch/createSubscribe/", "POST", {email})
            message(res.message)
        } catch (e) {
        }
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    return (
        <div className="subscribe">
            <h3 className="subscribe-title">Сотри для себя все границы спорта. Подписывайся на нашу рассылку, чтобы не пропустить новые обновления на нашей платформе</h3>
            <form className="subscribe-form">
                <input placeholder="e-mail" onChange={changeHandler} type="e-mail" />
                <button className="subscribe-btn" onClick={clickHandler} type="submit">Подписаться</button>
            </form>
        </div>
    )
}

export default Subscribe