import React, {useEffect, useState} from "react";
import {useHttp} from "../../../../hooks/http.hook";
import {useMessage} from "../../../../hooks/message.hook";

export const TrainingTypesAddMenu = () => {
    const {request, error, clearError} = useHttp()
    const message = useMessage()

    const [form, setForm] = useState({
        name: "",
        typeAvatar: ""
    })
    const [photo, setPhoto] = useState([])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const photoChangeHandler = event => {
        const data = new FormData()
        const photo = event.target.files[0]
        const id = String(Math.round(Math.random() * 1E9))
        const typeName = event.target.name
        data.append("id", id)
        data.append("typeName", typeName)
        data.append("file", photo)
        setPhoto(data)
        setForm({
            ...form, [typeName]: id + "_"
            + typeName
            + "."
            + photo.name.split(".")[1]
        })
    }

    const submitPhotoHandler = async () => {
        try {
            const {success} = await request('/api/upload', 'POST', photo)
            return success
        } catch (e) {}
    }

    const submitHandler = async () => {
        try {
            const {success} = await request('/api/fetch/addTrainingType', 'POST', {...form})
            const successPhoto = await submitPhotoHandler()
            if (success && successPhoto) {
                message("Новый тип тренировок добавлен")
            }
        } catch (e) {
        }
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
                    id="typeAvatar"
                    name="typeAvatar"
                    accept='.png, .jpg, .jpeg, .svg'
                    onChange={photoChangeHandler}
                />
            </fieldset>
            <button onClick={submitHandler}>Потдвердить</button>
        </div>
    )
}