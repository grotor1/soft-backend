const {Schema, model, Types} = require("mongoose");

const TrainingTypesSchema = new Schema({
    name: String,
    image: String
}, {
    collection: "trainingTypes"
})

module.exports = model("TrainingType", TrainingTypesSchema)
