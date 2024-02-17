const express = require("express")
const routeAdministrator = express.Router()
const createAdmin = require("../controllers/createAdmin")
const checkIsAdmin = require("../controllers/checkIsAdmin")

routeAdministrator.post("/admin/createSingleAdmin", (req, res)=>{

    createAdmin(req, res, verification = "single")
    
})

routeAdministrator.post("/admin/createNewAdmin", checkIsAdmin, (req, res)=>{

    createAdmin(req, res, verification = "existence")

})

module.exports = routeAdministrator