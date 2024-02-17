
const User = require("../models/User")

async function deleteAdmin(req, res){

    const {email} = req.body

    //validations
    if(!email){
        return res.status(422).json({
            status: false,
            msg: "Email is required!"})
    }
      
    //Getting the admin
    const recoveredAdmin = await User.findOne({email: email})

    if(!recoveredAdmin){

        return res.status(422).json({
            status: false,
            msg: `There is no such administrator with email ${email} in the system!`
        })
    }
   
    //deleting the admin
    try{

        await User.findOneAndDelete({email: email})

        res.status(201).json({
            status: true,
            msg: "Administrator successfully deleted!",
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: "A server error occurred while deleting the admin. Try later!"})
    }

}

module.exports = deleteAdmin
