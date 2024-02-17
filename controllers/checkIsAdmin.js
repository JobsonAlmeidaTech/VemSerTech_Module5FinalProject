const jwt = require("jsonwebtoken")

function checkIsAdmin(req, res, next){

    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
        return res.status(401).json({
            status: false,
            msg: "Access denied!"
        })    
    }

    const secret = process.env.secret
    jwt.verify(token, secret, function(error, decoded){
        if(error){
            res.status(401).json({
                status: false,
                msg: "Invalid token!"
            })
        }
        else{
            if(decoded.roles.includes("admin")){
                next()
            }
            else{
                res.status(403).json({
                    status: false,
                    msg: "This functionality is restricted to administrators"
                })
            }
            
        }

    })
   
}

module.exports = checkIsAdmin