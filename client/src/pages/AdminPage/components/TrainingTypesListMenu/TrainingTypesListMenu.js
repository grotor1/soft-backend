import React, {useEffect, useState} from "react";
import {useHttp} from "../../../../hooks/http.hook";
import {Link} from "react-router-dom";
import {useMessage} from "../../../../hooks/message.hook";

export const TrainingTypesListMenu = ({match}) => {
    const {request, error, clearError} = useHttp()
    const message = useMessage()

    const [trainingTypes, setTrainingTypes] = useState([{name: "", surname: ""}])

    useEffect(() => {
        const dataFromServer = async () => {
            try {
                const {data} = await request(`/api/fetch/getTrainingTypeList`, 'GET')
                setTrainingTypes(data)
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
            const {success} = await request(`/api/fetch/deleteTrainingType/${element._id}`, 'DELETE')
            if (success) {
                message('Тренировка удалена')
                setTrainingTypes(trainingTypes.filter(e => e._id!== element._id))
            }
        } catch (e) {}
    }

    return (
        <div>
            <h1>
                Список тренировок
            </h1>
            <ul>
                {trainingTypes.map(element => {
                    return (
                        <fieldset>
                            <legend>{element.name}</legend>
                            <Link to = {`${match.url}/trainingTypeEdit/${element._id}`}>
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