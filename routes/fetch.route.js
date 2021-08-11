const {Router} = require('express')
const Trainer = require('../models/trainer.model')
const TrainingTypes = require('../models/trainingTypes.model')
const User = require("../models/user.model")
const Conversation = require("../models/conversation.model")
const Message = require("../models/message.model")
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
    trainer._id_user = ""
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
    const update = req.body
    Trainer.findOneAndUpdate({_id: _id_trainer}, update, (err)=>{
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
    const update = req.body
    TrainingTypes.findOneAndUpdate({_id: _id_trainingType}, update, (err) =>{
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    })
})

router.get("/getUser/:_id_user", (req, res) => {
    const {_id_user} = req.params;
    User.findById(_id_user, (err, user) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: user});
    });
});

router.delete("/deleteUser/:_id_user", (req, res) => {
    const {_id_user} = req.params;
    User.deleteOne({_id: _id_user}, (err) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

router.patch("/updateUser/:_id_user", (req, res) => {
    const {_id_user} = req.params;
    const update = req.body
    User.findOneAndUpdate({_id: _id_user}, update, (err) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

router.post("/createConversation", async (req, res) => {
    try {
        const {_id_trainer, _id_user} = req.body
        const conversation = new Conversation({
            members: [_id_trainer, _id_user],
        });
        await conversation.save();
        res.status(201).json({success: true});
    } catch (e) {
        res.status(500).json({success: false, message: "Что-то не так", error: e})
    }
});

//get conv of a user

router.get("/getConversations/:_id_user", async (req, res) => {
    try {
        const {_id_user} = req.params
        Conversation.find({members: {$in: [_id_user]}}, (err, conversations) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: conversations});
        });
    } catch (e) {
        res.status(500).json({message: "Что-то не так", error: e});
    }
});

// get conv includes two userId

router.get("/getConversation/:_id_userFirst/:_id_userSecond", async (req, res) => {
    try {
        const {_id_userFirst, _id_userSecond} = req.params
        Conversation.findOne({members: {$all: [_id_userFirst, _id_userSecond]}}, (err, conversation) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: conversation});
        });
    } catch (e) {
        res.status(500).json({message: "Что-то не так", error: e});
    }
});

router.post("/createMessage/", async (req, res) => {
    try {
        const {_id_conversation, _id_sender, text} = req.body
        const message = new Message({_id_conversation, _id_sender, text});
        const savedMessage = await message.save()
        res.status(201).json({success: true, data: savedMessage});
    } catch (err) {
        res.status(500).json({message: "Что-то не так", error: e})
    }
});

//get

router.get("/getMessages/:_id_conversation", async (req, res) => {
    try {
        const {_id_conversation} = req.params
        Message.find({_id_conversation},(err, messages) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, data: messages});
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router