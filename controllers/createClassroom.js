const User = require("../models/User")
const bcrypt = require("bcrypt")
const Classroom = require("../models/Classroom")

async function createClassroomFunction(req, res){

    const {dacingStyle, level, dayOfTheWeek, startTime, endtime, roomNumber, teacher1_ID, teacher2_ID } = req.body

    //validations
    if(!dacingStyle){
        return res.status(422).json({
            status: false,
            msg: "dacingStyle is required!"})
    }
    if(!level){
        return res.status(422).json({
            status: false,
            msg: "level is required!"})
    }
    if(!dayOfTheWeek){
        return res.status(422).json({
            status: false,
            msg: "dayOfTheWeek is required!"})
    }    

    if(!startTime){
        return res.status(422).json({
            status: false,
            msg: "startTime is required!"})
    } 

    if(!endtime){
        return res.status(422).json({
            status: false,
            msg: "endtime is required!"})
    } 

    if(!roomNumber){
        return res.status(422).json({
            status: false,
            msg: "roomNumber is required!"})
    } 
 
    if(teacher1_ID){
        if(teacher1_ID.length != 24){
            return res.status(422).json({
                status: false,
                msg: "If teacher teacher1_ID is not empty it must be 24 characters long"})
        }
    }
    if(teacher2_ID){
        if(teacher2_ID.length != 24){
            return res.status(422).json({
                status: false,
                msg: "If teacher teacher2_ID is not empty it must be 24 characters long"})
        }
    }
    
    //checking if typed teachers exists in the system
    if(teacher1_ID){
        const recoveredTeacher1 = await User.findOne({_id: teacher1_ID, role: "teacher"})
        if(!recoveredTeacher1){
            return res.status(422).json({
                status: false,
                msg: `The teacher1_ID provided: ${teacher1_ID} does not belong to any teacher in the system! Use another ID!`})
        }
    }
    if(teacher2_ID){
        const recoveredTeacher2 = await User.findOne({_id: teacher2_ID, role: "teacher"})
        if(!recoveredTeacher2){
            return res.status(422).json({
                status: false,
                msg: `The teacher2_ID provided: ${teacher2_ID} does not belong to any teacher in the system! Use another ID!`})
        }
    }
   
     
    //creating the classroom
    const classroom = new Classroom({
        dacingStyle,
        level,
        dayOfTheWeek,
        startTime,
        endtime,
        roomNumber,
        teacher1_ID,
        teacher2_ID
    })

    try{

        await classroom.save()

        res.status(201).json({
            status: true,
            msg: `Classroom successfully created!`,
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: `A server error occurred while creating the classroom. Try later!`})
    }

}

module.exports = createClassroomFunction