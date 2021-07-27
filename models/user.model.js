const {Schema, model, Types} = require("mongoose");

const UsersSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    avatar: String,
    birthDate: String,
    phone: String,
    sex: String,
    targets: [String],
})

module.exports = model('User', UsersSchema)