const Opening = require("../Models/openings")
const router = require("express").Router()

// getALL
router.get('/',async (req,res)=>{
    try {
        const openingList = await Opening.find({})
        res.status(200).json(await openingList)
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
})
// getRandom
router.get('/random',async (req,res)=>{
    try {
        const openingList = await Opening.aggregate([{ $sample: { size: 1 } }])
        res.status(200).json(await openingList[0])
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const _id = req.params.id
        const opening = await Opening.findById(_id)
        res.status(200).json(opening)
    } catch (error) {
        res.status(500).send({msg:error.message})        
    }
})

router.post('/',async (req,res)=>{
    try {
        const newOpening = new Opening(req.body)
        const opening = await newOpening.save()
        res.status(201).json(opening)
    } catch (error) {
        res.status(500).json(error)
    }   
})



module.exports = router