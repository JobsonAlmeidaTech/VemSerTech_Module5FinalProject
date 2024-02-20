const express = require("express")
const routeListUsers = express.Router()
const listUsers = require("../controllers/listUsers")
const checkIsAdminTeacherStudent = require("../controllers/checkIsAdminTeacherStudent")

routeListUsers.get("/list/:role", checkIsAdminTeacherStudent, (req, res)=>{

    listUsers(res, req.params.role) 
})

module.exports = routeListUsers