const
    express = require('express'),
    router = express.Router(),
    Fridge = require("../controllers/fridges.js")

router.get('/', Fridge.showAll)
router.get('/:id', Fridge.showItem)
router.post('/', Fridge.create)
router.patch('/:id', Fridge.update)
router.delete('/:id', Fridge.destroy)


module.exports = router