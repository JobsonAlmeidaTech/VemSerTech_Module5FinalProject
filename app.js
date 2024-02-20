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
const routeListUsers = require("./routes/listUsers")
const routeListCourses = require("./routes/listCourses")
const routeUpdateCourse = require("./routes/updateCourse")
const routeDeleteCourse = require("./routes/deleteCourse")
const routeCreateCourse = require("./routes/createCourse")
const routeAddStudentToCourse = require("./routes/addStudentToCourse")
const routeRemoveStudentFromCourse = require("./routes/removeStudentFromCourse")

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
app.use(routeListUsers)
app.use(routeListCourses)
app.use(routeCreateCourse)
app.use(routeAddStudentToCourse)
app.use(routeRemoveStudentFromCourse)
app.use(routeUpdateCourse) 
app.use(routeDeleteCourse)

//Welcome public route 
app.get("/", (abc, res)=>{
    res.status(200).json({        
        msg: "Welcome to 123 Studio. Your best dancing school."
    })

})

app.listen(process.env.PORT, (error)=>{
    if(error) console.log(`Occurred an error in server setup`)
    else console.log(`Server listening on PORT ${process.env.PORT} `)
})