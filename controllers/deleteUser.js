
const User = require("../models/User")

async function deleteUser(req, res, role){

    const {email} = req.body

    //validations
    if(!email){
        return res.status(422).json({
            status: false,
            msg: "Email is required!"})
    }
      
    //Getting the user
    const recoveredUser = await User.findOne({email: email})
    console.log(recoveredUser)

    if(!recoveredUser || recoveredUser.role != role){

        return res.status(422).json({
            status: false,
            msg: `There is no ${role} with email ${email} in the system!`
        })
    }

    //deleting the user
    try{

        await User.findOneAndDelete({email: email})

        res.status(201).json({
            status: true,
            msg: `${role.charAt(0).toUpperCase()}${role.substring(1)} successfully deleted!`,
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: `A server error occurred while deleting the ${role}. Try later!`})
    }

}

module.exports = deleteUser
