const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Server is running').status(200)
})


module.exports = router