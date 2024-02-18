
const User = require("../models/User")

async function deleteTeacher(req, res){

    const {email} = req.body

    //validations
    if(!email){
        return res.status(422).json({
            status: false,
            msg: "Email is required!"})
    }
      
    //Getting the teacher
    const recoveredTeacher = await User.findOne({email: email})

    if(!recoveredTeacher){

        return res.status(422).json({
            status: false,
            msg: `There is no such teacher with email ${email} in the system!`
        })
    }
   
    //deleting the teacher
    try{

        await User.findOneAndDelete({email: email})

        res.status(201).json({
            status: true,
            msg: "Teacher successfully deleted!",
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: "A server error occurred while deleting the teacher. Try later!"})
    }

}

module.exports = deleteTeacher
