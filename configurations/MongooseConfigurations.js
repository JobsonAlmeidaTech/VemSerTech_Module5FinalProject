//ODM Mongoose Configurations
function mongooseInit(){

    const mongoose = require("mongoose")

    mongoose.Promise = global.Promise
    const dataBaseName = "DancingSchool"
    mongoose.connect(`mongodb://localhost:27017/${dataBaseName}`)
    .then(()=>{
        console.log(`Successfully connected to ${dataBaseName} database`)
    })
    .catch((error)=>{
        console.log(`There was an error connecting to the database ${dataBaseName}` + error)
    })

}

module.exports = mongooseInit
