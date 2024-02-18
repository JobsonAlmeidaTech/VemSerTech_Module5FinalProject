const express = require("express")
const routeCreateSingleAdmin = express.Router()
const createUser = require("../controllers/createUser")
const checkSingleAdmin = require("../controllers/checkSingleAdmin")

routeCreateSingleAdmin.post("/auth/createSingleAdmin", async (req, res)=>{

    const singleAdmin = await checkSingleAdmin()

    if(singleAdmin){
        createUser(req, res, "admin")
    }
    else{
        return res.status(422).json({
            status: false,
            msg: "There is already at least one administrator in the system! Ask him for your registration."})
    } 
    
})

module.exports = routeCreateSingleAdmin 