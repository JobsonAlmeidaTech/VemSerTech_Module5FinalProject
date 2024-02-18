const User = require("../models/User")

async function  checkSingleAdmin(){

    const adminExists = await User.findOne({role: "admin"})
    
    if(!adminExists){
        return true
    }
    else{
        return false
    } 

}

module.exports = checkSingleAdmin



