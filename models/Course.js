const mongoose = require("mongoose");

const Course = mongoose.model("Course", {
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
    endTime:{
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

module.exports = Course