const {Schema, model, Types} = require("mongoose");

const TrainersSchema = new Schema({
    name: String,
    surname: String,
    isVacant: Boolean,
    avatar: String,
    workExp: String,
    contacts: String,
    trainingTypes: [
        {
            _id_training: Types.ObjectId
        }
    ],
    aboutMyself: String,
    educations: [String],
    certificates: [
        {
            name: String,
            img: String
        }
    ],
    price: String,
    specialOffers: String
})

module.exports = model('Trainer', TrainersSchema)