const User = require("../models/User")

async function generateUserIdFunc(req, res){

    const begin = 1
    const end = 6

    const year = new Date().getFullYear()

    let randomPart = Math.floor(end - (1-Math.random())*(end - begin))

    if(randomPart<10) { randomPart = `000` + `${randomPart}`}
    else  if(randomPart>=10 && randomPart<100) { randomPart = `00` + `${randomPart}`}
    else  if(randomPart>=100 && randomPart<1000) { randomPart = `0` + `${randomPart}`}
    
    console.log(year)
    console.log(randomPart)
   
    const previousId = parseInt(`${year%1000}` +  `${randomPart}`)

    const userId = approvingID(previousId, begin, end)

    console.log(`userId: `+ userId)
    return userId

}

async function approvingID(previousId, begin, end){

    await User.findOne({userId: previousId})
    .then((user)=>{

        previousId = previousId - 1;

        if(previousId<begin){

            previousId = previousId + 1

            if(previousId>=end){
                return -1
            }
            else{
                return approvingID(previousId, begin, end)
            }

        }
        else{
            return approvingID(previousId, begin, end)
        }
    })
    .catch(()=>{
        console.log("catch")
        return previousId
    })

}

module.exports = generateUserIdFunc