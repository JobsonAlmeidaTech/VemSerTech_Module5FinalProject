const express = require("express")
const routeDeleteAdmin = express.Router()
const deleteUser = require("../controllers/deleteUser")
const checkIsAdmin = require("../controllers/checkIsAdmin")

routeDeleteAdmin.delete("/auth/deleteAdmin", checkIsAdmin, (req, res)=>{

    deleteUser(req, res, "admin")

})

module.exports = routeDeleteAdmin