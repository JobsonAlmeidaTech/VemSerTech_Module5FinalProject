const Classroom = require("../models/Classroom")

async function listClassrooms(req, res){

    try{ 

        const classrooms = await Classroom.find()

        return res.status(200).json({
            status: true,
            msg: classrooms
        })

    }
    catch(error){

        return  res.status(500).json({
                status: false,
                msg: `A server error occurred while listing the classrooms. Try later!`})
    }

}
    




module.exports = listClassrooms