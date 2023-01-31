
const express = require('express')
const { connection } = require('./config/connection')
const {userRoute} = require("./routers/user.router")
const { infoRoute} = require("./routers/info.routes")
const cors = require('cors')
const app  = express()
app.use(express.json())   //paserd the data for showing in console

app.use(cors())
app.use("/users",userRoute)
app.use("/info",infoRoute)
app.listen(5000, async()=>{
    try {
        await connection
        console.log("connected to db") 
    } catch (error) {
        console.log(error)
        
    }
  
    console.log("5000 prot is working")
})