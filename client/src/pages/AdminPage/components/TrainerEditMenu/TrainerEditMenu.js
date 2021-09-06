import React, {useEffect, useState} from "react";
import {useHttp} from "../../../../hooks/http.hook";
import {useMessage} from "../../../../hooks/message.hook";
import {useParams} from "react-router-dom";

export const TrainerEditMenu = () => {
    const {_id_trainer} = useParams()
    const {request, error, clearError} = useHttp()
    const message = useMessage()

    const [trainingTypes, setTrainingTypes] = useState([])
    const [form, setForm] = useState()

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
                const {data} = await request(`/api/fetch/getTrainer/${_id_trainer}`, 'GET')
                setForm(data)
            } catch (e) {}
        }
        dataFromServer()
    }, [request])

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(()=>{
        form.trainingTypes.map(element =>
            document.getElementById(element._id_training).checked = true
        )
    })

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
            const {success} = await request(`/api/fetch/updateTrainer/${_id_trainer}`, 'PATCH', {...form})
            if (success) {
                message("Тренер изменен")
                setForm({
                    name: "",
                    surname: "",
                    avatar: "",
                    workExp: "",
                    contacts: [{},{},{},{}],
                    trainingTypes: [],
                    aboutMyself: "",
                    educations: [],
                    certificates: [],
                    price: "",
                    specialOffers: ""
                })
            }
        } catch (e) {}
    }

    return (
        <div>
            <h1>
                Изменить тренера
            </h1>
            <fieldset>
                <legend>Имя</legend>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={changeHandler}
                    value={form.name}
                />
            </fieldset>
            <fieldset>
                <legend>Фамилия</legend>
                <input
                    type="text"
                    id="surname"
                    name="surname"
                    onChange={changeHandler}
                    value={form.surname}
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
                    value={form.workExp}
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
                    value={form.contacts[0] ? form.contacts[0].link : ""}
                />
                <input
                    type="text"
                    id="whatsApp"
                    name="whatsApp"
                    placeholder="WhatsApp"
                    onChange={contactChangeHandler}
                    value={form.contacts[1] ? form.contacts[1].link : ""}
                />
                <input
                    type="text"
                    id="tikTok"
                    name="tikTok"
                    placeholder="ТикТок"
                    onChange={contactChangeHandler}
                    value={form.contacts[2] ? form.contacts[2].link : ""}
                />
                <input
                    type="text"
                    id="vk"
                    name="vk"
                    placeholder="Вконтакте"
                    onChange={contactChangeHandler}
                    value={form.contacts[3] ? form.contacts[3].link : ""}
                />
            </fieldset>
            <fieldset>
                <legend>Типы Тренировок</legend>
                {trainingTypes.map((element, index) => {
                    return (
                        <div>
                            <input type="checkbox" id={element._id} name={`type${index}`} autoComplete={'off'}
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
                    value={form.aboutMyself}
                />
            </fieldset>
            <fieldset>
                <legend>Образование</legend>
                <textarea
                    id="educations"
                    name="educations"
                    onChange={changeHandler}
                    value={form.educations}
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
                    value={form.price}
                    onChange={changeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Специальные предложения</legend>
                <input
                    type="text"
                    id="specialOffers"
                    name="specialOffers"
                    value={form.specialOffers}
                    onChange={changeHandler}
                />
            </fieldset>
            <button onClick={submitHandler}>Потвердить</button>
        </div>
    )
}