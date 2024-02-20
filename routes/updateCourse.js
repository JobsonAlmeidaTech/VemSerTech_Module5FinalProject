const express = require("express")
const routeUpdateCourse= express.Router()
const checkIsAdmin = require("../controllers/checkIsAdmin")
const updateCourse= require("../controllers/updateCourse")

routeUpdateCourse.patch("/auth/updateCourse", checkIsAdmin, async (req, res)=>{

    updateCourse(req, res)

})

module.exports = routeUpdateCourse
