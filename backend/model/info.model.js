const mongoose = require("mongoose")

const infoSchema = mongoose.Schema({
    long: String,
    ip : String
})

const infoModel = mongoose.model("info",infoSchema)

module.exports={
    infoModel
}