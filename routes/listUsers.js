const express = require("express")
const routeListUsers = express.Router()
const listUsers = require("../controllers/listUsers")

routeListUsers.get("/list/:role", (req, res)=>{

    listUsers(res, req.params.role) 
})

module.exports = routeListUsers