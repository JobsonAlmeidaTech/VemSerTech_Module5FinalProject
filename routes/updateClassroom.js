const express = require("express")
const routeUpdateClassroom = express.Router()
const checkIsAdmin = require("../controllers/checkIsAdmin")
const updateClassroom = require("../controllers/updateClassroom")

routeUpdateClassroom.put("/auth/updateClassroom", checkIsAdmin, async (req, res)=>{

    updateClassroom (req, res)

})

module.exports = routeUpdateClassroom
