const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function login(req, res){ 

    const {email, password} = req.body

    //validations
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

    //checking if user exists
    const user = await User.findOne({email: email})
    if(!user){
    return res.status(404).json({
        status:false,
        msg: "User not found!"})
    }

    //checking if passwords match
    const checkPassword = await bcrypt.compare(password, user.password)
    if(!checkPassword){
        return res.status(422).json({
            status: false,
            msg: "Invalid password!"})
    }

    //Generating JWT token and sending it to the client
    try{
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }, secret,
        {
            expiresIn: 60
        })
    
        res.status(200).json({
            status: true,
            msg: "Login successfully completed",
            token: token
        })
    
    }
    catch(error){
        console.log(error)
        res.status(500).json({
            status: false,
            msg: "A server error occurred. Try later!"})
    }

}

module.exports = login