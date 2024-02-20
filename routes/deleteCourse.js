const express = require('express')
const routeDeleteCourse = express.Router()
const checkIsAdmin = require('../controllers/checkIsAdmin')
const deleteCourse = require("../controllers/deleteCourse")

routeDeleteCourse.delete("/auth/deleteCourse", checkIsAdmin, (req, res)=>{

    deleteCourse(req, res)

})

module.exports = routeDeleteCourse