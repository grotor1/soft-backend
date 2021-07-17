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
    console.log(req.body)
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
    console.log(trainingType)
    trainingType.save(err => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true})
    })
})

router.get("/getTrainersList", (req, res) => {
    Trainer.find((err, trainers) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true, data: trainers})
    })
})

router.get("/getTrainer/:_id_trainer", (req, res) => {
    const {_id_trainer} = req.params;
    Trainer.findById(_id_trainer, (err, trainers) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true, data: trainers})
    })
})

router.get("/getTrainingType/:_id_trainingType", (req, res) => {
    const {_id_trainingType} = req.params
    TrainingTypes.findById(_id_trainingType, (err, trainingTypes) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true, data: trainingTypes})
    })
})

router.get("/getTrainingTypeList", (req, res) => {
    TrainingTypes.find((err, trainingTypes) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true, data: trainingTypes})
    })
})

router.delete("/deleteTrainer/:_id_trainer", (req, res) => {
    const {_id_trainer} = req.params
    Trainer.deleteOne({_id: _id_trainer}, (err) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true})
    })
})

router.patch('/updateTrainer/:_id_trainer', (req, res) => {
    const {_id_trainer} = req.params
    Trainer.deleteOne({_id: _id_trainer}, (err) => {if (err) return res.json({success: false, message: err})})
    const trainer = new Trainer
    const {
        name, surname, avatar, workExp,
        contacts, trainingTypes, aboutMyself,
        educations, certificates, price, specialOffers
    } = req.body
    console.log(req.body)
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

router.delete("/deleteTrainingType/:_id_trainingType", (req, res) => {
    const {_id_trainingType} = req.params
    TrainingTypes.deleteOne({_id: _id_trainingType}, (err) => {
        if (err) return res.json({success: false, message: err})
        return res.json({success: true})
    })
})

router.patch("/updateTrainingType/:_id_trainingType", (req, res) => {
    const {_id_trainingType} = req.params
    TrainingTypes.deleteOne({_id: _id_trainingType}, (err) => {
        if (err) return res.json({success: false, message: err})
    })
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

module.exports = router