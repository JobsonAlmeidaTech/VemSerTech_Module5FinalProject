const express = require("express")
const mongooseInit = require("./configurations/MongooseConfigurations")
const routeAdministrator = require("./routes/Administrator")

const app = express()
mongooseInit()

app.use(express.json())
app.use(routeAdministrator)

//Welcome public route 
app.get("/", (abc, res)=>{
    res.status(200).json({        
        msg: "Welcome to 123 Studio. Your best dancing school."
    })

})

const PORT = 3000
app.listen(PORT, (error)=>{
    if(error) console.log(`Occurred an error in server setup`)
    else console.log(`Server listening on PORT ${PORT} `)
})