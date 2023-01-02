const express = require ("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port=process.env.PORT || 2554
app.use(express.json())

const connect=require("./configs/db")




const dataController=require("./controllers/data.controller")
const bagController=require("./controllers/bag.controller")
app.use("/data",dataController)
app.use("/bag",bagController)



app.listen(port,async function (req,res){
    try{
        await connect();
        console.log ("Listening Port 2554")
    }catch(err){
        console.log(err.message)
    }
})