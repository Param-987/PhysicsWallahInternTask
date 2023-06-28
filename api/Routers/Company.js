const Company = require("../Models/company")
const router = require("express").Router()

// getALL
router.get('/',async (req,res)=>{
    try {
        const companyList = await Company.find({})
        res.status(200).json(companyList)
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const _id = req.params.id
        const company = await Company.findById(_id)
        res.status(200).json(company)
    } catch (error) {
        res.status(500).send({msg:error.message})        
    }
})

router.post('/',async (req,res)=>{
    try {
        const newCompany = new Company(req.body)
        const company = await newCompany.save()
        res.status(201).json(company)
    } catch (error) {
        res.status(500).json(error)
    }   
})

module.exports = router