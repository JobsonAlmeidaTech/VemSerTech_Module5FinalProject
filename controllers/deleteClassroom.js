const Classroom = require("../models/Classroom")

async function deleteClassroom(req, res){

    const {classroomId} = req.body

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
            msg: `The classroomId provided does not belong to any classroom at the school! Use another ID!`})
    }

    //Deleting the classroom
    try{

        await Classroom.findOneAndDelete({_id: classroomId})

        res.status(200).json({
            status: true,
            msg: `Classroom successfully deleted!`,
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: `A server error occurred while deleting the classroom. Try later!`})
    }

}

module.exports = deleteClassroom