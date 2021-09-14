const {Schema, model} = require("mongoose");

const TrainingTypesSchema = new Schema({
    name: String,
    typeAvatar: String
}, {
    collection: "trainingTypes"
})

module.exports = model("TrainingType", TrainingTypesSchema)
