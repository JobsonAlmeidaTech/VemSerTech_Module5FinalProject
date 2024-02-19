const Classroom = require("../models/Classroom")
const User = require("../models/User")

async function deleteUser(req, res, role){

    const {userId} = req.body

    //validations
    if(!userId){
        return res.status(422).json({
            status: false,
            msg: "userId is required!"})
    }

    if(userId.length != 24){
        return res.status(422).json({
            status: false,
            msg: "The userId must be 24 characters long"})
    }


    //checking if userId is really an system user Id
    const userRecovered = await User.findOne({_id: userId})
    
    if(!userRecovered){ 
        return res.status(422).json({
            status: false,
            msg: `The userId provided does not belong to any user at the school! Use another ID!`})
    }
   
    //deleting the user if user is admin

    if(role==="admin"){
        deleteAdmin(req, res)
    }

    if(role==="student"){        
        deleteStudent(req, res)
    } 

    if(role==="teacher"){        
        deleteTeacher(req, res)
    } 

    console.log("passou delete user")
}

async function deleteAdmin(req, res){

    const {userId} = req.body

    //Deleting from the Users collection
    try{

        await User.findOneAndDelete({_id: userId})

        res.status(200).json({
            status: true,
            msg: `Admin successfully deleted!`,
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: `A server error occurred while deleting the admin. Try later!`})
    }

}

async function deleteStudent(req, res){

    const {userId} = req.body

     //Deleting from the Users collection
     try{
        await User.findOneAndDelete({_id: userId})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: `A server error occurred while deleting the student. Try later!`})
    }

    //Deleting from the Classrooms collection
    try{
        recoveredClassrooms = await Classroom.find()

        for(const classroom of recoveredClassrooms){

            let newStudentsIds = classroom.studentIds

            if(newStudentsIds.includes(userId)){ //checking if the student is in the classroom. If yes, delete it

                const index = newStudentsIds.indexOf(userId)
                newStudentsIds.splice(index, 1)

                //updating the classroom
                try{
                    await Classroom.findOneAndUpdate({_id: classroom._id}, {studentIds: newStudentsIds })   
                }
                catch(error){
                    return  res.status(500).json({
                        status: false,
                        msg: `A server error occurred while adding the student. Try later!`})
                }           
            }
        }

        res.status(200).json({
            status: true,
            msg: `Student successfully deleted!`
        })

    }
    catch(error){
        return res.status(500).json({
            status: false,
            msg: `An error occoured in teh server. Try later!`
        })
    }
}


async function deleteTeacher(req, res){

    const {userId} = req.body

     //Deleting from the Users collection
     try{
        await User.findOneAndDelete({_id: userId})
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: `A server error occurred while deleting the teacher. Try later!`})
    }

    //Deleting from the Classrooms collection
    try{
        recoveredClassrooms = await Classroom.find()

        for(const classroom of recoveredClassrooms){

            let teacher1_IDNew = classroom.teacher1_ID 
            let teacher2_IDNew = classroom.teacher2_ID 

            if(classroom.teacher1_ID === userId){
                teacher1_IDNew = ""
            }
            if(classroom.teacher2_ID === userId){
                teacher2_IDNew = ""
            }
            
            try{
                await Classroom.findOneAndUpdate({_id: classroom._id}, {teacher1_ID: teacher1_IDNew, teacher2_ID: teacher2_IDNew})   
            }
            catch(error){
                return  res.status(500).json({
                    status: false,
                    msg: `A server error occurred while adding the student. Try later!`})
            }           
          
        }

        res.status(200).json({
            status: true,
            msg: `Teacher successfully deleted!`
        })

    }
    catch(error){
        return res.status(500).json({
            status: false,
            msg: `An error occoured in teh server. Try later!`
        })
    }
}



module.exports = deleteUser
