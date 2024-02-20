const User = require("../models/User")
const Classroom = require("../models/Classroom")

async function updateClassroom (req, res){

    const {classroomId, dacingStyle, level, dayOfTheWeek, startTime, endtime, roomNumber, teacher1_ID, teacher2_ID} = req.body

    //--- validations ---//

    if(!classroomId){
        return res.status(422).json({
            status: false,
            msg: "classroomId is required!"})
    }

    if(classroomId.length != 24){
        return res.status(422).json({
            status: false,
            msg: "The classroomId must be 24 characters long"})
    }


    //checking if classroomId is really an system classroom Id
    const recoveredClassroom = await Classroom.findOne({_id: classroomId})
    
    if(!recoveredClassroom){ 
        return res.status(422).json({
            status: false,
            msg: `The recoveredClassroom provided does not belong to any classroom at the school! Use another ID!`})
    }

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
        const newClassRoom = await Classroom.findOneAndUpdate(
            {_id: classroomId},
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
            msg: `Classroom successfully updated`,
            classroom: newClassRoom
        })
    }
    catch(error){
        return  res.status(500).json({
            status: false,
            msg: `A server error occurred while updating the classroom. Try later!`})
    }
    
} 

module.exports = updateClassroom