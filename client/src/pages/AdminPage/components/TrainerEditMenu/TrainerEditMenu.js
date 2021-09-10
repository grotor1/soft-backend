import React, {useEffect, useState} from "react";
import {useHttp} from "../../../../hooks/http.hook";
import {useMessage} from "../../../../hooks/message.hook";
import {useParams} from "react-router-dom";

export const TrainerEditMenu = () => {
    const {_id_trainer} = useParams()
    const {request, error, clearError} = useHttp()
    const message = useMessage()

    const [trainingTypes, setTrainingTypes] = useState([])
    const [form, setForm] = useState({
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

    const [photos, setPhotos] = useState({
        bigAvatar: null,
        smallAvatar: null,
        certificates: []
    })

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

    const photoChangeHandler = event => {
        const data = new FormData()
        const photo = event.target.files[0]
        const id = String(Math.round(Math.random() * 1E9))
        const typeName = event.target.name
        data.append("id", id)
        data.append("typeName", typeName)
        data.append("file", photo)
        setPhotos({...photos, [typeName]: data})
        setForm({
            ...form, [typeName]: id + "_"
            + typeName
            + "."
            + photo.name.split(".")[1]
        })
    }

    const photoChangeHandlerMultiple = event => {
        const data = []
        const names = []
        const typeName = event.target.name
        console.log(event.target.files)
        for (let i = 0; i < event.target.files.length; i++) {
            const photo = event.target.files[i]
            const dataElement = new FormData()
            const id = String(Math.round(Math.random() * 1E9))
            dataElement.append("id", id)
            dataElement.append("typeName", typeName)
            dataElement.append("file", photo)
            dataElement.append("index", String(i))
            data.push(dataElement)
            names.push(id + "_" + typeName + "_" + String(i) + "." + photo.name.split(".")[1])
        }
        setPhotos({...photos, [typeName]: data})
        setForm({...form, [typeName]: names})
    }

    const contactChangeHandler = event => {
        const contacts = form.contacts.filter(element => element.name !== event.target.name)
        contacts.push({name: event.target.name, link: event.target.value})
        setForm({...form, contacts: contacts})
    }

    const submitPhotoHandler = async () => {
        try {
            const successBig = await request('/api/upload', 'POST', photos.bigAvatar).success
            const successSmall = await request('/api/upload', 'POST', photos.smallAvatar).success
            const successCertificates = []
            for (let i = 0; i < photos.certificates.length; i++) {
                const {success} = await request('/api/upload', 'POST', photos.certificates[i])
                successCertificates.push(success)
            }
            return successBig && successSmall && successCertificates.every(Boolean);
        } catch (e) {}
    }

    const submitHandler = async () => {
        try {
            const {success} = await request(`/api/fetch/updateTrainer/${_id_trainer}`, 'PATCH', {...form})
            const successPhoto = submitPhotoHandler()
            if (success && successPhoto) {
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
                <legend>Большое фото</legend>
                <input
                    type="file"
                    id="bigAvatar"
                    name="bigAvatar"
                    accept='.png, .jpg, .jpeg'
                    onChange={photoChangeHandler}
                />
            </fieldset>
            <fieldset>
                <legend>Маленькое фото</legend>
                <input
                    type="file"
                    id="smallAvatar"
                    name="smallAvatar"
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