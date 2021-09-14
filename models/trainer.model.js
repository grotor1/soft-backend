const {Schema, model, Types} = require("mongoose");

const TrainersSchema = new Schema({
    _id_user: String,
    name: String,
    surname: String,
    isVacant: Boolean,
    bigAvatar: String,
    smallAvatar: String,
    workExp: String,
    contacts: [{
        name: String,
        link: String
    }],
    trainingTypes: [
        {
            _id_training: String
        }
    ],
    aboutMyself: String,
    educations: String,
    certificates: [String],
    price: String,
    specialOffers: String
})

module.exports = model('Trainer', TrainersSchema)