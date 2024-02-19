const User = require("../models/User")
const bcrypt = require("bcrypt")

async function createUser(req, res, role){

    const {name, email, password, confirmPassword} = req.body

    //validations
    if(!name){
        return res.status(422).json({
            status: false,
            msg: "Name is required!"})
    }
    if(!email){
        return res.status(422).json({
            status: false,
            msg: "Email is required!"})
    }
    if(!password){
        return res.status(422).json({
            status: false,
            msg: "Password is required!"})
    }    
    if(password !== confirmPassword){
        return res.status(422).json({
            status: false,
            msg: "Passwords don't match!"})
    }


    //checking if user exists
    const userRecovered = await User.findOne({email: email, role: role})

    if(userRecovered && userRecovered.role === role){
        return res.status(422).json({
            status: false,
            msg: `${role.charAt(0).toUpperCase()}${role.substring(1)} already existing in the system! Use another email!`})
    }

    //creating password's hash
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password,salt)

    //creating the user
    const user = new User({
        name,
        email,
        password : passwordHash,
        role: role
    })

    try{

        await user.save()

        res.status(201).json({
            status: true,
            msg: `${role.charAt(0).toUpperCase()}${role.substring(1)} successfully created!`,
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: `A server error occurred while creating the ${role}. Try later!`})
    }

}

module.exports = createUser
