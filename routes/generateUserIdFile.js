const express = require("express")
const routeGenerateUserIdTest = express.Router()
const generateUserIdFunc = require("../controllers/generateUserId")

 routeGenerateUserIdTest.post("/generateUserId", (req, res)=>{

    generateUserIdFunc(req, res)

    // await User.findOne({userId: 240003})
    // .then((data)=>{

    //     console.log("entrou no then")
    //     console.log(data)

    //     return res.status(200).json({
    //         msg: "Entrou no then"
    //     })

    // })
    // .catch((error)=>{

    //     console.log("entrou no catch")
    //     console.log(data)

    //     return res.status(200).json({
    //         msg: "Entrou no catch"
    //     })

    // })

    // console.log("depois do findOne")

})

module.exports = routeGenerateUserIdTest  

