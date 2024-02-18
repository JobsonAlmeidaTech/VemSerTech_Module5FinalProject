const express = require("express")
const mongooseInit = require("./configurations/MongooseConfigurations")
require("dotenv").config()

const routeCreateSingleAdmin = require("./routes/createSingleAdmin")
const routeCreateAdmin = require("./routes/createAdmin")
const routeLogin = require("./routes/login")
const routeCreateTeacher = require("./routes/createTeacher")
const routeCreateStudent = require("./routes/createStudent")
const routeDeleteAdmin = require("./routes/deleteAdmin")
const routeDeleteTeacher = require("./routes/deleteTeacher")
const routeDeleteStudent = require("./routes/deleteStudent")

const app = express()
mongooseInit()

app.use(express.json()) 
app.use(routeCreateSingleAdmin)
app.use(routeLogin)
app.use(routeCreateAdmin)
app.use(routeCreateTeacher)
app.use(routeCreateStudent)
app.use(routeDeleteAdmin)
app.use(routeDeleteTeacher)
app.use(routeDeleteStudent)

//Welcome to public route 
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