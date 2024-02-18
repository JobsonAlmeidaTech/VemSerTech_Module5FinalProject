const express = require("express")
const routeCreateAdmin = express.Router()
const checkIsAdmin = require("../controllers/checkIsAdmin")
const createUser = require("../controllers/createUser")

routeCreateAdmin.post("/auth/createAdmin", checkIsAdmin, (req, res)=>{

    createUser(req, res, "admin")

})

module.exports = routeCreateAdmin