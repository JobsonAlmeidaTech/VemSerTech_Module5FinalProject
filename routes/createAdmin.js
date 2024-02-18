const express = require("express")
const routeCreateAdmin = express.Router()
const createAdmin = require("../controllers/createAdmin")
const checkIsAdmin = require("../controllers/checkIsAdmin")

routeCreateAdmin.post("/auth/createAdmin", checkIsAdmin, (req, res)=>{

    createAdmin(req, res, verification = "existence")

})

module.exports = routeCreateAdmin