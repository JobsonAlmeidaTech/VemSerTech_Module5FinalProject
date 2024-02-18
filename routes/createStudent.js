const express = require("express")
const routeCreateStudent = express.Router()
const createUser = require("../controllers/createUser")
const checkIsAdminTeacher = require("../controllers/checkIsAdminTeacher")

routeCreateStudent.post("/auth/createStudent", checkIsAdminTeacher, (req, res)=>{

    createUser(req, res, "student")

})

module.exports = routeCreateStudent