const express = require("express")
const routeAddStudentToClass = express.Router()
const checkIsAdminTeacher = require("../controllers/checkIsAdminTeacher")
const addStudentToClass = require("../controllers/addStudentToClass")

routeAddStudentToClass.post("/auth/addStudentToClass", checkIsAdminTeacher, (req, res)=>{

    addStudentToClass(req, res)

})

module.exports = routeAddStudentToClass