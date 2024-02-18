const express = require("express")
const routeCreateTeacher = express.Router()
const createUser = require("../controllers/createUser")
const checkIsAdmin = require("../controllers/checkIsAdmin")

routeCreateTeacher.post("/auth/createTeacher", checkIsAdmin, (req, res)=>{

    createUser(req, res, "teacher")

})

module.exports = routeCreateTeacher