const express = require ("express")
const cors = require("cors")

const app = express()
app.use(cors())
const port=process.env.PORT || 2554
app.use(express.json())

const connect=require("./configs/db")

const {register,login}=require("./controllers/auth.controller")
app.post("/register",register)
app.post ("/login",login)


const dataController=require("./controllers/data.controller")
const bagController=require("./controllers/bag.controller")
app.use("/data",dataController)
app.use("/bag",bagController)
const empolyeeController=require("./controllers/employee.controller")
app.use("/employee",empolyeeController)


app.listen(port,async function (req,res){
    try{
        await connect();
        console.log ("Listening Port 2554")
    }catch(err){
        console.log(err.message)
    }
})