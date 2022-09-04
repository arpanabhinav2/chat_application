const mongoose = require('mongoose');

const messsageModel = mongoose.Schema({
    sender: { typr: mongoose.Schema.Types.ObjectTd, ref: "User" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
},
    {
        timestamps: true,
    }
);

const Message = mongoose.model("Message", messageaModel);

module.exports = Message;