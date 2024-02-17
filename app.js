const express = require("express")
const mongooseInit = require("./configurations/MongooseConfigurations")
require("dotenv").config()
const routeAdministrator = require("./routes/Administrator")
const routeLogin = require("./routes/login")

const app = express()
mongooseInit()

app.use(express.json()) 
app.use(routeAdministrator)
app.use(routeLogin)

//Welcome public route 
app.get("/", (abc, res)=>{
    res.status(200).json({        
        msg: "Welcome to 123 Studio. Your best dancing school."
    })

})

PORT = 3000
app.listen(PORT, (error)=>{
    if(error) console.log(`Occurred an error in server setup`)
    else console.log(`Server listening on PORT ${PORT} `)
})