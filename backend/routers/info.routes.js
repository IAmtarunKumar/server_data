const express = require("express")
const {infoModel} = require("../model/info.model")

const infoRoute = express.Router()

infoRoute.get("/",async(req,res)=>{
    const data = await infoModel.find()
    res.send("infoworking")
})

infoRoute.post("/datainfo",async(req,res)=>{

    try {
        let payload = req.body
        const create = new infoModel(payload)
        create.save()
        res.send({"msg" : "user Created"})
    } catch (error) {
        console.log(error)
        res.send("something went wrong")
    }



})

module.exports={
    infoRoute
}
