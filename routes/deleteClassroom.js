const express = require('express')
const routeDeleteClassroom = express.Router()
const checkIsAdmin = require('../controllers/checkIsAdmin')
const deleteClassroom = require("../controllers/deleteClassroom")

routeDeleteClassroom.delete("/auth/deleteClassroom", checkIsAdmin, (req, res)=>{

    deleteClassroom(req, res)

})

module.exports = routeDeleteClassroom