import React, {useEffect, useState} from "react";
import {useHttp} from "../../../../hooks/http.hook";
import {useMessage} from "../../../../hooks/message.hook";

export const TrainingTypesAddMenu = () => {
    const {request, error, clearError} = useHttp()
    const message = useMessage()
    const [form, setForm] = useState({
        name: "",
        img: ""
    })
    const _handleReaderLoaded = readerEvt => {
        let binaryString = readerEvt.target.result
        setForm({...form, img: btoa(binaryString)})
    }
    const photoChangeHandler = event => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = _handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)
        }
    }
    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const submitHandler = async () =>{
        try {
            const {name, img} = form
            const {success} = await request('/api/fetch/addTrainingType', 'POST', {name, img})
            if(success){
                message("Новый тип тренировок добавлен")
            }
        } catch (e) {}
    }
    return (
        <div>
            <h1>
                Добавить вид тренировок
            </h1>
            <fieldset>
                <legend>Название</legend>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={changeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Фото</legend>
                <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept='.png, .jpg, .jpeg'
                    onChange={photoChangeHandler}
                />
            </fieldset>
            <button onClick={submitHandler}>Потдвердить</button>
        </div>
    )
}