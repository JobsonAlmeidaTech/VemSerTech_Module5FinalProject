const express = require("express")
const routeCreateTeacher = express.Router()
const createTeacher = require("../controllers/createTeacher")
const checkIsAdmin = require("../controllers/checkIsAdmin")

routeCreateTeacher.post("/auth/createTeacher", checkIsAdmin, (req, res)=>{

    createTeacher(req, res)

})

module.exports = routeCreateTeacher