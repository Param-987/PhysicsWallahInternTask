const mongoose = require('mongoose')

const CompanySchema = new mongoose.Schema({
    title:{type:String,unique:true},
    compantType:{type:String},
    Applicant:{type:Number},
    AboutUs:{type:String},
    WebSiteLink:{type:String},
    Icon:{type:String}
})

CompanySchema.indexes()
const Company = mongoose.model("Company",CompanySchema)

module.exports = Company