const mongoose = require("mongoose");

const User = mongoose.model("User", {
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum:  ["admin", "teacher", "student"]     
    }
})

module.exports = User