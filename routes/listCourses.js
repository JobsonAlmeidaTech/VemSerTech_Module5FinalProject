const express = require("express")
const routeListCourses = express.Router()
const listCourses = require("../controllers/listCourses")
const checkIsAdminTeacherStudent = require("../controllers/checkIsAdminTeacherStudent") 

routeListCourses.get("/auth/list/courses", checkIsAdminTeacherStudent,  (req, res)=>{

    listCourses(req,res) 

})

module.exports = routeListCourses