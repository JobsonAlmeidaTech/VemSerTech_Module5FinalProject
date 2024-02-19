
const User = require("../models/User")
const Classroom = require("../models/Classroom")

async function addStudentToClass(req, res){

    //checking if the studentId is really an student Id
    const userRecovered = await User.findOne({_id: req.body.studentId, role:"student"})
    
    if(!userRecovered){ 
        return res.status(422).json({
            status: false,
            msg: `The studentId informed doesn't own to any student in the school! Use another ID!`})
    }

    //checking if the classroomId is really an classroom Id
    const classroomRecovered = await Classroom.findOne({_id: req.body.classroomId})
    
    if(!classroomRecovered){ 
        return res.status(422).json({
            status: false,
            msg: `The classroomId informed doesn't own to any classroom in the school! Use another ID!`})
    }

    //checking if the student is already in the classroom
    let newStudentsIds = classroomRecovered.studentIds

    if(newStudentsIds.includes(req.body.studentId)){
        return res.status(422).json({
            status: false,
            msg: `Student already existing in the classroom!`})

    }

    //adding the student to the classroom
    newStudentsIds.push(req.body.studentId)  
    try{
        await Classroom.findOneAndUpdate({_id: req.body.classroomId}, {studentIds: newStudentsIds })

        res.status(200).json({
            status: true,
            msg: `Student successfully added to the classroom!`
        })
    }
    catch(error){
        return  res.status(500).json({
            status: false,
            msg: `A server error occurred while adding the student. Try later!`})
    }   

}

module.exports = addStudentToClass