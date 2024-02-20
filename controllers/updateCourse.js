const User = require("../models/User")
const Course = require("../models/Course")

async function updateCourse (req, res){

    const {courseId, new_dacingStyle, new_level, new_dayOfTheWeek, new_startTime, new_endTime, new_roomNumber, new_teacher1_ID, new_teacher2_ID} = req.body

    //validating courseId
    if(!courseId){
        return res.status(422).json({
            status: false,
            msg: "courseId is required!"})
    }

    if(courseId.length != 24){
        return res.status(422).json({
            status: false,
            msg: "The courseId must be 24 characters long"})
    }

    //checking if courseId is really an system Course Id
    const recoveredCourse = await Course.findOne({_id: courseId})    
    if(!recoveredCourse){ 
        return res.status(422).json({
            status: false,
            msg: `The courseId provided does not belong to any Course at the school! Use another ID!`})
    }

    let dacingStyle = recoveredCourse.dacingStyle
    let level =  recoveredCourse.level
    let dayOfTheWeek =  recoveredCourse.dayOfTheWeek
    let startTime =  recoveredCourse.startTime
    let endtime =  recoveredCourse.endtime
    let roomNumber =  recoveredCourse.roomNumber
    let teacher1_ID =  recoveredCourse.teacher1_ID
    let teacher2_ID =  recoveredCourse.teacher2_ID

    console.log
    if(new_dacingStyle)     dacingStyle = new_dacingStyle 
    if(new_level)           level = new_level
    if(new_dayOfTheWeek)    dayOfTheWeek = new_dayOfTheWeek
    if(new_startTime)       startTime = new_startTime
    if(new_endTime)         endTime = new_endTime
    if(new_roomNumber)      roomNumber = new_roomNumber
    if(new_teacher1_ID)     teacher1_ID = new_teacher1_ID
    if(new_teacher2_ID)     teacher2_ID = new_teacher2_ID

    //validating teachers ID length
    if(teacher1_ID){
        if(teacher1_ID.length != 24){
            return res.status(422).json({
                status: false,
                msg: "If teacher1_ID is not empty it must be 24 characters long"})
        }
    }
    if(teacher2_ID){
        if(teacher2_ID.length != 24){
            return res.status(422).json({
                status: false,
                msg: "If teacher2_ID is not empty it must be 24 characters long"})
        }
    }

    //validating if teachers Id typed really exists in the system
    if(teacher1_ID){
        const recoveredTeacher1 = await User.findOne({_id: teacher1_ID, role: "teacher"})
        if(!recoveredTeacher1){
            return res.status(422).json({
                status: false,
                msg: `The teacher1_ID provided  does not belong to any teacher in the system! Use another ID!`})
        }
    }
    if(teacher2_ID){
        const recoveredTeacher2 = await User.findOne({_id: teacher2_ID, role: "teacher"})
        if(!recoveredTeacher2){
            return res.status(422).json({
                status: false,
                msg: `The teacher2_ID provided does not belong to any teacher in the system! Use another ID!`})
        }
    }

    try{
        const newCourse = await Course.findOneAndUpdate(
            {_id: courseId},
            {dacingStyle: dacingStyle,
            level: level, 
            dayOfTheWeek:dayOfTheWeek,
            startTime: startTime,
            endtime: endtime,
            roomNumber: roomNumber,
            teacher1_ID: teacher1_ID,
            teacher2_ID: teacher2_ID},
            {new: true})

        res.status(200).json({
            status: true,
            msg: `Course successfully updated`,
            Course: newCourse
        })
    }
    catch(error){
        return  res.status(500).json({
            status: false,
            msg: `A server error occurred while updating the course. Try later!`})
    }
    
} 

module.exports = updateCourse