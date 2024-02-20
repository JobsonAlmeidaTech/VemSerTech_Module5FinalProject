const express = require("express")
const routeDeleteTeacher = express.Router()
const deleteUser = require("../controllers/deleteUser")
const checkIsAdmin = require("../controllers/checkIsAdmin")

routeDeleteTeacher.delete("/auth/deleteTeacher", checkIsAdmin, (req, res)=>{

    deleteUser(req, res, "teacher")

})

module.exports = routeDeleteTeacher