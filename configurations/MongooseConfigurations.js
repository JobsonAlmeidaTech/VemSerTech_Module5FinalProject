//ODM Mongoose Configurations
function mongooseInit(){

    const mongoose = require("mongoose")

    mongoose.Promise = global.Promise
    mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`) 
    .then(()=>{
        console.log(`Successfully connected to ${process.env.DATABASE_NAME} database`)
    })
    .catch((error)=>{
        console.log(`There was an error connecting to the database ${process.env.DATABASE_NAME}` + error)
    })

}

module.exports = mongooseInit
