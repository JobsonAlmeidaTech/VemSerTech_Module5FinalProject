const User = require("../models/User")

async function listUsers(res, role){

    if(role=="admin" || role=="student" || role=="teacher" ){

        try{
            var foundUsers = await User.find({role: role})
        }
        catch(error){
            console.log(`Error while searching the ${role}:`, error)
            return res.status(500).json({
                status: false,
                msg: `A server error occurred while listing the ${role}. Try later!`
            })
    
        }
    
        const usersList = []   
    
        for(const user of foundUsers){        
            usersList.push({name: user.name, email: user.email, role: user.role, userId: user.userId})
        }
        
        res.status(200).json({
            status: true,
            msg: usersList
        })

    }
    else{
        res.status(404).json({
            status: "false",
            msg: `The user to be listed must be admin, student or teacher`
        })
    }
   
}

module.exports = listUsers