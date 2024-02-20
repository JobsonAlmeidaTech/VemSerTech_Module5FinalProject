const express = require("express")
const routeAddStudentToCourse = express.Router()
const checkIsAdminTeacher = require("../controllers/checkIsAdminTeacher")
const addStudentToCourse = require("../controllers/addStudentToCourse")

routeAddStudentToCourse.patch("/auth/addStudentToCourse", checkIsAdminTeacher, (req, res)=>{

    addStudentToCourse(req, res)

})

module.exports = routeAddStudentToCourse