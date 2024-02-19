const express = require("express")
const routeListClassrooms = express.Router()
const listClassrooms = require("../controllers/listClassrooms")
const checkIsAdminTeacher = require("../controllers/checkIsAdminTeacher") 

routeListClassrooms.get("/auth/list/classroom",  checkIsAdminTeacher,  (req, res)=>{

    listClassrooms(req,res) 

})

module.exports = routeListClassrooms