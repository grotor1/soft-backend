import React, {useEffect, useState} from "react";
import {useHttp} from "../../../../hooks/http.hook";
import {useMessage} from "../../../../hooks/message.hook";

export const TrainerAddMenu = () => {
    const {request, error, clearError} = useHttp()
    const message = useMessage()

    const [form, setForm] = useState({
            name: "",
            surname: "",
            avatar: "",
            workExp: "",
            contacts: [],
            trainingTypes: [],
            aboutMyself: "",
            educations: "",
            certificates: [],
            price: "",
            specialOffers: ""
        })
    const [trainingTypes, setTrainingTypes] = useState([])

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

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const checkboxChangeHandler = (event, element) => {
        if (event.target.checked) {
            const trainingTypes = form.trainingTypes
            trainingTypes.push({_id_training: element._id})
            setForm({
                ...form, trainingTypes: trainingTypes
            })
        } else {
            const trainingTypes = form.trainingTypes.filter(e => e._id_training !== element._id)
            setForm({
                ...form, trainingTypes: trainingTypes
            })
        }
    }

    const _handleReaderLoaded = readerEvt => {
        let binaryString = readerEvt.target.result
        setForm({...form, avatar: btoa(binaryString)})
    }

    const _handleReaderLoadedMultiple = readerEvt => {
        let binaryString = readerEvt.target.result
        const certificates = form.certificates
        certificates.push(btoa(binaryString))
        setForm({...form, certificates: certificates})
    }

    const photoChangeHandler = event => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = _handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)
        }
    }

    const photoChangeHandlerMultiple = event => {
        for (let i = 0; i < event.target.files.length; i++) {
            const file = event.target.files[i]
            if (file) {
                const reader = new FileReader()
                reader.onload = _handleReaderLoadedMultiple.bind(this)
                reader.readAsBinaryString(file)
            }
        }
    }

    const contactChangeHandler = event => {
        const contacts = form.contacts.filter(element => element.name !== event.target.name)
        contacts.push({name: event.target.name, link: event.target.value})
        setForm({...form, contacts: contacts})
    }

    const submitHandler = async () => {
        try {
            const {name,
                surname,
                avatar,
                workExp,
                contacts,
                trainingTypes,
                aboutMyself,
                educations,
                certificates,
                price,
                specialOffers} = form
            const {success} = await request('/api/fetch/addTrainer', 'POST', {name,
                surname,
                avatar,
                workExp,
                contacts,
                trainingTypes,
                aboutMyself,
                educations,
                certificates,
                price,
                specialOffers})
            if(success){
                message("Тренер создан")
                setForm({
                    name: "",
                    surname: "",
                    avatar: "",
                    workExp: "",
                    contacts: [],
                    trainingTypes: [],
                    aboutMyself: "",
                    educations: [],
                    certificates: [],
                    price: "",
                    specialOffers: ""
                })
            }
        } catch (e) {
        }
    }

    return (
        <div>
            <h1>
                Добавить тренера
            </h1>
            <fieldset>
                <legend>Имя</legend>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={changeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Фамилия</legend>
                <input
                    type="text"
                    id="surname"
                    name="surname"
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
            <fieldset>
                <legend>Опыт работы</legend>
                <textarea
                    id="workExp"
                    name="workExp"
                    onChange={changeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Контакты</legend>
                <input
                    type="text"
                    id="inst"
                    name="inst"
                    placeholder="Инстаграмм"
                    onChange={contactChangeHandler}
                />
                <input
                    type="text"
                    id="whatsApp"
                    name="whatsApp"
                    placeholder="WhatsApp"
                    onChange={contactChangeHandler}
                />
                <input
                    type="text"
                    id="tikTok"
                    name="tikTok"
                    placeholder="ТикТок"
                    onChange={contactChangeHandler}
                />
                <input
                    type="text"
                    id="vk"
                    name="vk"
                    placeholder="Вконтакте"
                    onChange={contactChangeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Типы Тренировок</legend>
                {trainingTypes.map((element, index) => {
                    return (
                        <div>
                            <input type="checkbox" id={`type${index}`} name={`type${index}`} autoComplete={'off'}
                                   onChange={(event) => checkboxChangeHandler(event, element)}/>
                            <label htmlFor={`type${index}`}>{element.name}</label>
                        </div>
                    )
                })}

            </fieldset>
            <fieldset>
                <legend>О себе</legend>
                <textarea
                    id="aboutMyself"
                    name="aboutMyself"
                    onChange={changeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Образование</legend>
                <textarea
                    id="educations"
                    name="educations"
                    onChange={changeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Сертификаты</legend>
                <input
                    type="file"
                    multiple
                    id="certificates"
                    accept='.jpeg, .png, .jpg'
                    name="certificates"
                    onChange={photoChangeHandlerMultiple}
                />
            </fieldset>
            <fieldset>
                <legend>Цена</legend>
                <input
                    type="text"
                    id="price"
                    name="price"
                    onChange={changeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Специальные предложения</legend>
                <input
                    type="text"
                    id="specialOffers"
                    name="specialOffers"
                    onChange={changeHandler}
                />
            </fieldset>
            <button onClick={submitHandler}>Потвердить</button>
        </div>
    )
}