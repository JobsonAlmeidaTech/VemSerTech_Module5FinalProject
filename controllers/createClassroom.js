const User = require("../models/User")
const bcrypt = require("bcrypt")
const Classroom = require("../models/Classroom")

async function createClassroomFunction(req, res){

    const {dacingStyle, level, dayOfTheWeek, startTime, endtime, teacher1_ID, teacher2_ID } = req.body

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
 
    if(!teacher1_ID){
        return res.status(422).json({
            status: false,
            msg: "Teacher1_ID is required!"})
    } 

    //checking if teachers exists in the system
    const teacherRecovered = await User.findOne({userId: teacher1_ID})
    if(!teacherRecovered || teacherRecovered.role !== "teacher"){
        return res.status(422).json({
            status: false,
            msg: `The informed ${teacher1_ID} does not exist in the system! Use another ID!`})
    }

    const teacherRecovered2 = await User.findOne({userId: teacher2_ID})
    if(!teacherRecovered2 || teacherRecovered2.role !== "teacher"){
        return res.status(422).json({
            status: false,
            msg: `The informed ${teacher2_ID} does not exist in the system! Use another ID!`})
    }
    
    //creating the classroom
    const classroom = new Classroom({
        dacingStyle,
        level,
        dayOfTheWeek,
        startTime,
        endtime,
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