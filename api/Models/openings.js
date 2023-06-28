const mongoose = require("mongoose")

const openingsSchema = new mongoose.Schema({
    company_id:{type:String},
    JobName:{type:String},
    timings:{type:String,enum:["Part Time","Full Time"]},
    type:{type:String,enum:["Work From Home","In Office"]},
    skills:{type:[String]},
    location:{type:[String]},
    Duration:{type:Number},
    Stipend:{type:[Number]},
    Experience:{type:String,enum:["Fresher","Intermediate","Experienced"]},
    PostedDate:{type:String},
    EndIn:{type:String},
    NoOfOpenings:{type:Number},
    requirements:{type:[String]},
    responsibilites:{type:[String]}
})

openingsSchema.indexes()
const Opening = mongoose.model("Openings",openingsSchema)
module.exports = Opening

/*






*/