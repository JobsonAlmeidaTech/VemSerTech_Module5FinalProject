const User = require("../models/User")
const Course = require("../models/Course")

async function addStudentToCourse(req, res){


    const {courseId, studentId} = req.body

    if(courseId.length != 24){
        return res.status(422).json({
            status: false,
            msg: "courseId must be 24 characters long"})
    }

    if(studentId.length != 24){
        return res.status(422).json({
            status: false,
            msg: "studentId must be 24 characters long"})
    }

    //checking if the studentId is really an student Id
    const userRecovered = await User.findOne({_id: studentId, role:"student"})    
    if(!userRecovered){ 
        return res.status(422).json({
            status: false,
            msg: `The studentId provided does not belong to any course in the school! Use another ID!`})
    }

    //checking if the courseId is really an course Id
    const recoveredCourse = await Course.findOne({_id: courseId})    
    if(!recoveredCourse){ 
        return res.status(422).json({ 
            status: false,
            msg: `The courseId provided does not belong to any course in the school! Use another ID!`})
    }

    //checking if the student is already in the course
    let newStudentsIds = recoveredCourse.studentIds
    if(newStudentsIds.includes(studentId)){
        return res.status(422).json({
            status: false,
            msg: `Student already existing in the course!`})

    }

    //adding the student to the course
    newStudentsIds.push(studentId)  
    try{
        await Course.findOneAndUpdate({_id: courseId}, {studentIds: newStudentsIds })

        res.status(200).json({
            status: true,
            msg: `Student successfully added to the course!`
        })
    }
    catch(error){
        return  res.status(500).json({
            status: false,
            msg: `A server error occurred while adding the student to the course. Try later!`})
    }   

}

module.exports = addStudentToCourse