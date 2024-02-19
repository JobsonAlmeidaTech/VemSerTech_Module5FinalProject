const mongoose = require("mongoose");

const Classroom = mongoose.model("Classroom", {
    dacingStyle: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    dayOfTheWeek:{
        type: String,
        required: true
    },
    startTime:{
        type: String,
        required: true
    },
    endtime:{
        type: String,
        required: true
    },       
    teacher1_ID: {
        type: Number,
        required: true
    },
    teacher2_ID:{
        type: Number,
        required: false
    },
    studentIds: {
        type: Array,
        required: false
    }
})

module.exports = Classroom