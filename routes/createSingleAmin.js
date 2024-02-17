const express = require("express")
const routeCreateSingleAdmin = express.Router()
const createAdmin = require("../controllers/createAdmin")

routeCreateSingleAdmin.post("/auth/createSingleAdmin", (req, res)=>{

    createAdmin(req, res, verification = "single")
    
})

module.exports = routeCreateSingleAdmin 