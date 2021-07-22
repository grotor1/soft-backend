import React, {useEffect, useState} from "react";
import {useHttp} from "../../../../hooks/http.hook";
import {Link} from "react-router-dom";
import {useMessage} from "../../../../hooks/message.hook";

export const TrainersListMenu = ({match}) => {
    const {url} = match
    const {request, error, clearError} = useHttp()
    const message = useMessage()

    const [trainers, setTrainers] = useState([{name: "", surname: ""}])

    useEffect(() => {
        const dataFromServer = async () => {
            try {
                const {data} = await request(`/api/fetch/getTrainersList`, 'GET')
                setTrainers(data)
            } catch (e) {
            }
        }
        dataFromServer();
    }, [request])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const deleteHandler = async (element) => {
        try {
            const {success} = await request(`/api/fetch/deleteTrainer/${element._id}`, 'DELETE')
            if (success) {
                message('Тренер удален')
                setTrainers(trainers.filter(e => e._id !== element._id))
            }
        } catch (e) {}
    }

    return (
        <div>
            <h1>
                Список тренеров
            </h1>
            <ul>
                {trainers.map(element => {
                    return (
                        <fieldset>
                            <legend>{element.name} {element.surname}</legend>
                            <Link to={`${url}/trainerEdit/${element._id}`}>
                                <button>Изменить</button>
                            </Link>
                            <button onClick={() => deleteHandler(element)}>Удалить</button>
                        </fieldset>
                    )
                })}
            </ul>
        </div>
    )
}