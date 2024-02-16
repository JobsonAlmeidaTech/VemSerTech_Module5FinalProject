const express = require("express")
const routeAdministrator = express.Router()
const createAdmin = require("../controllers/admin/createAdmin")

routeAdministrator.post("/admin/createSingleAdmin", (req, res)=>{

    createAdmin(req, res, verification = "single")
    
})

routeAdministrator.post("/admin/createAdmin", (req, res)=>{

    createAdmin(req, res, verification = "existence")

})

module.exports = routeAdministrator