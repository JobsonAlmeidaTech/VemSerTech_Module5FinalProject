
const User = require("../models/User")
const bcrypt = require("bcrypt")

async function createAdmin(req, res, verification){

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


    if(verification === "single"){
        //checking if there is at least one admin registered into the system
        const adminExists = await User.findOne({roles: "admin"}) 
        if(adminExists){
            return res.status(422).json({
                status: false,
                msg: "There is already at least one administrator in the system! Ask him for your registration."})
        }        
    }
    else if(verification === "existence"){
        //checking if user already exists
        const userExists = await User.findOne({email: email})
        if(userExists){
            return res.status(422).json({
                status: false,
                msg: "User already existing in the system! Use another email!"})
        }
    }
    else{
        return res.status(422).json({
            status: false,
            msg: "Incorrect validation type"})
    }

    //creating password's hash
    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password,salt)

    //creating a user ID
    let idUser 
    await User.find().count()
    .then((numberOfUsers)=>{
        idUser =  numberOfUsers + 1
    })
    .catch((error)=>{
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: "A server error occurred while generating the user ID. Try later!"})
    })

    //creating a user
    const user = new User({
        id: idUser,
        name,
        email,
        password : passwordHash,
        roles: ["admin"]
    })

    try{

        await user.save()

        res.status(201).json({
            status: true,
            msg: "User successfully created!",
            id: idUser
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: "A server error occurred while generating the user ID. Try later!"})
    }

}

module.exports = createAdmin
