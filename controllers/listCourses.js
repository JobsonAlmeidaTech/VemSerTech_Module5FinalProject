const Course = require("../models/Course")

async function listCourses(req, res){

    try{ 

        const courses = await Course.find()

        return res.status(200).json({
            status: true,
            msg: courses
        })

    }
    catch(error){

        return  res.status(500).json({
                status: false,
                msg: `A server error occurred while listing the courses. Try later!`})
    }

}
    




module.exports = listCourses