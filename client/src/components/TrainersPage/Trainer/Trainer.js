import React, {useEffect, useState} from 'react'
import './Trainer.css'
import {Link} from "react-router-dom";
import {useHttp} from "../../../hooks/http.hook";
import {useMessage} from "../../../hooks/message.hook";


const Trainer = (props) => {
    const [trainer, setTrainer] = useState({
        name: "",
        surname: "",
        bigAvatar: "",
        smallAvatar: "",
        workExp: "",
        contacts: [],
        trainingTypes: [],
        aboutMyself: "",
        educations: "",
        certificates: [],
        price: "",
        specialOffers: ""
    })
    const {request, error, clearError} = useHttp()
    const [trainingTypes, setTrainingTypes] = useState([])
    const message = useMessage()


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
        const dataFromServer = async () => {
            try {
                const {data} = await request(`/api/fetch/getTrainer/${props._id}`, 'GET')
                setTrainer(data)
            } catch (e) {
            }
        }
        dataFromServer()
    }, [request])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    return (
        <div className={`trainers-list__item bg-image`}
             style={{backgroundImage: `url("https://soft-platform.s3.amazonaws.com/${props.isPropped ? props.bigAvatar : trainer.bigAvatar}")`}}>
            <div className="trainer__content">
                <h3 className="trainer-heading">{props.isPropped ? props.name : trainer.name + " " + trainer.surname}</h3>
                <p className="trainer-desc">{props.isPropped ? props.info : trainer.trainingTypes.map((trainerTrainingType, index) => {
                    const trainingType = trainingTypes.find(trainingType => {
                        return trainingType._id === trainerTrainingType._id_training
                    })
                    if (trainingType) {
                        if (index + 1 !== trainer.trainingTypes.length) {
                            return (trainingType.name + ", ")
                        } else {
                            return (trainingType.name)
                        }
                    }
                }).join("") + "."}</p>
                <Link to={`${props.isPropped ? props.url : "/trainers"}/${props._id}`}>
                    <span className="more">Подробнее</span>
                </Link>
            </div>
        </div>
    )
}

export default Trainer