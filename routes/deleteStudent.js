const express = require("express")
const routeDeleteStudent = express.Router()
const deleteUser = require("../controllers/deleteUser")
const checkIsAdminTeacher = require("../controllers/checkIsAdminTeacher")

routeDeleteStudent.delete("/auth/deleteStudent", checkIsAdminTeacher, (req, res)=>{

    deleteUser(req, res, "student")

})

module.exports = routeDeleteStudent