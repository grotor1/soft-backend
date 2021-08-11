const {Schema, model, Types} = require("mongoose");

const SubscribesSchema = new Schema({
    email: String
})

module.exports = model('Subscribe', SubscribesSchema)