const {Router} = require('express')
const Trainer = require('../models/trainer.model.js')
const TrainingTypes = require('../models/trainingTypes.model')
const router = Router()

router.post("/addTrainer", (req, res) => {
    const trainer = new Trainer
    const { certificates } = req.body
    console.log(req.body)
    if (Object.keys(req.body).every(key => {return (key === "certificates" ? true : req.body[key])})) {
        return res.status(400).json({
            success: false,
            message: 'You must provide every parameter'
        })
    }
    // maybe use spread operator like: trainer = {...trainer, ...req.body}?
    Object.keys(req.body).forEach(key => {trainer[key] = req.body[key]})
    trainer.isVacant = true
    trainer.certificates = certificates || []
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
    //maybe use spread operator?
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
    const { certificates } = req.body
    if (Object.keys(req.body).every(key => {return (key === "certificates" ? true : req.body[key])})) {
        return res.status(400).json({
            success: false,
            message: 'You must provide every parameter'
        })
    }
    // maybe use spread operator like: trainer = {...trainer, ...req.body}?
    Object.keys(req.body).forEach(key => {trainer[key] = req.body[key]})
    trainer.isVacant = true
    trainer.certificates = certificates || []
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
