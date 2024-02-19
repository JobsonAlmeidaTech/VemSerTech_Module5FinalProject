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
    roomNumber:{
        type: String,
        required: true
    },     
    teacher1_ID: {
        type: String,
        required: false
    },   
    teacher2_ID:{
        type: String,
        required: false
    },
    studentIds: {
        type: Array,
        required: false
    }
})

module.exports = Classroom