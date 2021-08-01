const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    _id_conversation: {
      type: String,
    },
    _id_sender: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
