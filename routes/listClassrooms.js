const express = require("express")
const routeListClassrooms = express.Router()
const listClassrooms = require("../controllers/listClassrooms")
const checkIsAdminTeacherStudent = require("../controllers/checkIsAdminTeacherStudent") 

routeListClassrooms.get("/auth/list/classroom", checkIsAdminTeacherStudent,  (req, res)=>{

    listClassrooms(req,res) 

})

module.exports = routeListClassrooms