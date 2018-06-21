const
    express = require('express'),
    router = express.Router(),
    Fridges = "../controllers/fridges.js"

router.get('/', Fridge.showAll)
router.post('/', Fridge.create)

module.exports = router