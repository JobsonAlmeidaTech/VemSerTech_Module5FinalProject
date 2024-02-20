const Course = require("../models/Course")

async function deleteCourse(req, res){

    const {courseId} = req.body

    //--- validations ---//

    if(!courseId){
        return res.status(422).json({
            status: false,
            msg: "courseId is required!"})
    }

    if(courseId.length != 24){
        return res.status(422).json({
            status: false,
            msg: "The courseId must be 24 characters long"})
    }

    //checking if courseId is really an system Course Id
    const recoveredCourse = await Course.findOne({_id: courseId})    
    if(!recoveredCourse){ 
        return res.status(422).json({
            status: false,
            msg: `The courseId provided does not belong to any Course at the school! Use another ID!`})
    }

    //Deleting the Course
    try{

        await Course.findOneAndDelete({_id: courseId})

        res.status(200).json({
            status: true,
            msg: `Course successfully deleted!`,
        })
    
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            status: false,
            msg: `A server error occurred while deleting the Course. Try later!`})
    }

}

module.exports = deleteCourse