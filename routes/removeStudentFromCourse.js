const express = require("express")
const routeRemoveStudentFromCourse = express.Router()
const checkIsAdminTeacher = require("../controllers/checkIsAdminTeacher")
const removeStudentFromCourse = require("../controllers/removeStudentFromCourse")

routeRemoveStudentFromCourse.delete("/auth/removeStudentFromCourse", checkIsAdminTeacher, (req, res)=>{

    removeStudentFromCourse(req, res)

})

module.exports = routeRemoveStudentFromCourse