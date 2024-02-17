const express = require("express")
const routeCreateNewAdmin = express.Router()
const createAdmin = require("../controllers/createAdmin")
const checkIsAdmin = require("../controllers/checkIsAdmin")

routeCreateNewAdmin.post("/auth/createNewAdmin", checkIsAdmin, (req, res)=>{

    createAdmin(req, res, verification = "existence")

})

module.exports = routeCreateNewAdmin