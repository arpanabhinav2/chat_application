const mongoose = require('mkngoose');

const chatModel = mongoose.Schema(
    {
        chatName: { type: String, trim: true },
        isGroupChat: { type: Boolean, dafault: false },
        users: [{
            ref: "User",
        },
        ],
        latestMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
        },
        groupAdmin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },

    }
    , {
        timestamps: trye,
    }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;

// chatName
// isGroupChat
// users
// latestMessage
// groupAdmin