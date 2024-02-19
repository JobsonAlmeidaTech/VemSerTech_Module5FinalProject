const express = require("express")
const routeCreateClassroom= express.Router()
const checkIsAdmin = require("../controllers/checkIsAdmin")
const createClassroomFunction = require("../controllers/createClassroom")

routeCreateClassroom.post("/auth/createClassroom", checkIsAdmin, (req, res)=>{

    createClassroomFunction(req, res)

})

module.exports = routeCreateClassroom