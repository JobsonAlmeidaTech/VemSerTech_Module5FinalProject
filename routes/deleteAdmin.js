const express = require("express")
const routeDeleteAdmin = express.Router()
const deleteAdmin = require("../controllers/deleteAdmin")
const checkIsAdmin = require("../controllers/checkIsAdmin")

routeDeleteAdmin.post("/auth/deleteAdmin", checkIsAdmin, (req, res)=>{

    deleteAdmin(req, res)

})

module.exports = routeDeleteAdmin