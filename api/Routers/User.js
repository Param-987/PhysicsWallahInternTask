const User = require("../Models/user")
const router = require("express").Router()

// getALL
router.get('/', async (req, res) => {
    try {
        const userList = await User.find({})
        res.status(200).json(userList)
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findById(_id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
})

// Add new User
router.post('/', async (req, res) => {
    try {
        const newUser = new User(req.body)
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Add bookmark is user by id
router.put('/:id/bookmark', async (req, res) => {
    const id = req.params.id;
    try {
        console.log(req.body)
        const updatedUser = await User.findByIdAndUpdate(
            { _id: id },
            { $push: { Bookmarks: req.body.id } },
            { new: true },
        )
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})
router.delete('/:id/bookmark/:_id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: req.params.id },
            { $pull: { Bookmarks: req.params._id } },
            { new: true },
        )
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id/apply', async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: id },
            { $push: { applied: req.body.id } },
            { new: true }
        )
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/:id/bookmark', async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(
            { _id: id },
            { $pull: { Bookmarks: req.body.id } },
            { new: true }
        )
        res.status(201).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router