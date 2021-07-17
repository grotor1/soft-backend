const {Schema, model, Types} = require("mongoose");

const TrainersSchema = new Schema({
    name: String,
    surname: String,
    isVacant: Boolean,
    avatar: String,
    workExp: String,
    contacts: [{
        name: String,
        link: String
    }],
    trainingTypes: [
        {
            _id_training: Types.ObjectId
        }
    ],
    aboutMyself: String,
    educations: String,
    certificates: [String],
    price: String,
    specialOffers: String
})

module.exports = model('Trainer', TrainersSchema)