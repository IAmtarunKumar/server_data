const express = require("express")
const {userModel} = require("../model/users.model")

const userRoute = express.Router()

userRoute.get("/",async(req,res)=>{
    const data = await userModel.find()
    res.send(data)
})

userRoute.post("/create",async(req,res)=>{

    try {
        let payload = req.body
        const create = new userModel(payload)
        create.save()
        res.send({"msg" : "user Created"})
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }



})

module.exports={
    userRoute
}
