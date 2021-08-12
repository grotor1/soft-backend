import React, {useEffect, useState} from "react";
import {useHttp} from "../../../../hooks/http.hook";
import {useMessage} from "../../../../hooks/message.hook";
import {useParams} from "react-router-dom";

export const TrainingTypesEditMenu = () => {
    const {_id_trainingType} = useParams()
    const {request, error, clearError} = useHttp()
    const message = useMessage()

    const [form, setForm] = useState({
        name: "",
        img: ""
    })

    useEffect(() => {
        const dataFromServer = async () => {
            try {
                const {data} = await request(`/api/fetch/getTrainingType/${_id_trainingType}`, 'GET')
                setForm(data)
            } catch (e) {}
        }
        dataFromServer()
    }, [request])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

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

    const submitHandler = async () =>{
        try {
            const {success} = await request(`/api/fetch/updateTrainingType/${_id_trainingType}`, 'PATCH', {...form})
            if(success){
                message("Тип тренировок изменен")
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
                    value={form.name}
                    onChange={changeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Фото</legend>
                <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept='.png, .jpg, .jpeg, .svg'
                    onChange={photoChangeHandler}
                />
            </fieldset>
            <button onClick={submitHandler}>Потдвердить</button>
        </div>
    )
}