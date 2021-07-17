const {Schema, model} = require("mongoose");

const TrainingTypesSchema = new Schema({
    name: String,
    img: String
}, {
    collection: "trainingTypes"
})

module.exports = model("TrainingType", TrainingTypesSchema)
