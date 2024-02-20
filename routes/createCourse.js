const express = require("express")
const routeCreateCourse= express.Router()
const checkIsAdmin = require("../controllers/checkIsAdmin")
const createCourse = require("../controllers/createCourse")

routeCreateCourse.post("/auth/createCourse", checkIsAdmin, (req, res)=>{

    createCourse(req, res)

})

module.exports = routeCreateCourse