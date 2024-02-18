const User = require("../models/User")

async function  checkSingleAdmin(){

    const adminExists = await User.findOne({roles: "admin"})

    console.log("adminExists: ", adminExists)
    
    if(!adminExists){
        return true
    }
    else{
        return false
    } 

}

module.exports = checkSingleAdmin



