const express = require("express")
const routeLogin = express.Router()
const login = require("../controllers/login")

routeLogin.post("/auth/login", async (req, res)=>{

    login(req, res)

})

module.exports = routeLogin