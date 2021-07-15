const {Router} = require('express')
const Trainer = require('../models/trainer.model.js')
const TrainingTypes = require('../models/trainingTypes.model')
const router = Router()

router.post("/addTrainer", (req, res) => {
    const trainer = new Trainer
    const {
        name, surname, avatar, workExp,
        contacts, trainingTypes, aboutMyself,
        educations, certificates, price, specialOffers
    } = req.body
    if (!name || !surname || !avatar || !workExp
        || !contacts || !trainingTypes || !aboutMyself
        || !educations || !price || !specialOffers) {
        return res.status(400).json({
            success: false,
            message: 'You must provide every parameter'
        })
    }
    trainer.name = name
    trainer.surname = surname
    trainer.isVacant = true
    trainer.avatar = avatar
    trainer.workExp = workExp
    trainer.contacts = contacts
    trainer.trainingTypes = trainingTypes
    trainer.aboutMyself = aboutMyself
    trainer.educations = educations
    trainer.certificates = certificates || []
    trainer.price = price
    trainer.specialOffers = specialOffers
    trainer.save(err => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true})
    })
})

router.post("/addTrainingType", (req, res) => {
    const trainingType = new TrainingTypes
    const {name, img} = req.body
    if (!name || !img) {
        return res.status(400).json({
            success: false,
            message: 'You must provide name, img'
        })
    }
    trainingType.name = name
    trainingType.img = img
    trainingType.save(err => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true})
    })
})

router.get("/getTrainersList", (req, res) => {
    Trainer.find((err, themes) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true, data: themes})
    })
})

router.get("/getTrainer/:_id_trainer", (req, res) => {
    const {_id_trainer} = req.params;
    Trainer.findById(_id_trainer, (err, course) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true, data: course})
    })
})

router.get("/getTrainingType/:_id_trainingType", (req, res) => {
    const {_id_trainingType} = req.params
    TrainingTypes.findById(_id_trainingType, (err, course) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true, data: course})
    })
})

module.exports = router